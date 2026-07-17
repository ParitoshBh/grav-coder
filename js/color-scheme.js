(function () {
    'use strict';

    var root = document.documentElement;

    if (!root || typeof root.getAttribute !== 'function' || typeof root.setAttribute !== 'function') {
        return;
    }

    var configuredScheme = root.getAttribute('data-color-scheme');
    var basePath = root.getAttribute('data-site-base-path') || '/';
    var storageKey = 'grav-coder:color-scheme:' + basePath;
    var systemMediaQuery = null;
    var systemListenerAttached = false;
    var controls = [];

    if (configuredScheme !== 'light' && configuredScheme !== 'dark' && configuredScheme !== 'system') {
        configuredScheme = 'light';
    }

    if (configuredScheme === 'system' && typeof window.matchMedia === 'function') {
        try {
            systemMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        } catch (error) {
            systemMediaQuery = null;
        }
    }

    function readVisitorPreference() {
        var storedValue;

        try {
            storedValue = window.localStorage.getItem(storageKey);
        } catch (error) {
            return null;
        }

        return storedValue === 'light' || storedValue === 'dark' ? storedValue : null;
    }

    function writeVisitorPreference(value) {
        try {
            window.localStorage.setItem(storageKey, value);
        } catch (error) {
            // Storage is best effort; the current document still uses the choice.
        }
    }

    function removeVisitorPreference() {
        try {
            window.localStorage.removeItem(storageKey);
        } catch (error) {
            // Storage is best effort; the current document still uses Site Default.
        }
    }

    function resolveConfiguredScheme() {
        if (configuredScheme !== 'system') {
            return configuredScheme;
        }

        return systemMediaQuery && systemMediaQuery.matches === true ? 'dark' : 'light';
    }

    var visitorPreference = readVisitorPreference();

    function updateControl(effectiveScheme) {
        var selectedValue = visitorPreference || 'default';
        var selectedLabel;
        var nextLabel;
        var iconClass;
        var index;

        if (controls.length === 0) {
            return;
        }

        if (selectedValue === 'light') {
            selectedLabel = 'Light';
            nextLabel = 'Dark';
            iconClass = 'fas fa-sun';
        } else if (selectedValue === 'dark') {
            selectedLabel = 'Dark';
            nextLabel = 'Site Default';
            iconClass = 'fas fa-moon';
        } else {
            selectedLabel = 'Site Default';
            nextLabel = 'Light';
            iconClass = 'fas fa-adjust';
        }

        for (index = 0; index < controls.length; index += 1) {
            controls[index].icon.className = iconClass;
            controls[index].trigger.setAttribute(
                'aria-label',
                'Color scheme: ' + selectedLabel +
                    '; current appearance: ' + (effectiveScheme === 'dark' ? 'Dark' : 'Light') +
                    '. Activate to use ' + nextLabel + '.'
            );
        }
    }

    function applyScheme(scheme) {
        root.setAttribute('data-effective-color-scheme', scheme);
        updateControl(scheme);
    }

    function handleSystemChange() {
        if (visitorPreference === null) {
            applyScheme(resolveConfiguredScheme());
        }
    }

    function updateSystemTracking() {
        var canTrack = configuredScheme === 'system' &&
            systemMediaQuery &&
            typeof systemMediaQuery.addEventListener === 'function' &&
            typeof systemMediaQuery.removeEventListener === 'function';
        var shouldTrack = canTrack && visitorPreference === null;

        if (shouldTrack && !systemListenerAttached) {
            try {
                systemMediaQuery.addEventListener('change', handleSystemChange);
                systemListenerAttached = true;
            } catch (error) {
                systemListenerAttached = false;
            }
        } else if (!shouldTrack && systemListenerAttached) {
            try {
                systemMediaQuery.removeEventListener('change', handleSystemChange);
            } catch (error) {
                // The current-page preference still remains authoritative.
            }
            systemListenerAttached = false;
        }
    }

    applyScheme(visitorPreference || resolveConfiguredScheme());
    updateSystemTracking();

    function selectChoice(value) {
        if (value === 'default') {
            visitorPreference = null;
            removeVisitorPreference();
            updateSystemTracking();
            applyScheme(resolveConfiguredScheme());
        } else {
            visitorPreference = value;
            updateSystemTracking();
            applyScheme(value);
            writeVisitorPreference(value);
        }
    }

    function cycleChoice() {
        if (visitorPreference === null) {
            selectChoice('light');
        } else if (visitorPreference === 'light') {
            selectChoice('dark');
        } else {
            selectChoice('default');
        }
    }

    function initializeControl() {
        var controlNodes;
        var control;
        var trigger;
        var icon;
        var index;

        if (typeof document.querySelector !== 'function' ||
                typeof document.querySelectorAll !== 'function' ||
                typeof document.addEventListener !== 'function') {
            return;
        }

        controlNodes = document.querySelectorAll('[data-color-scheme-control]');
        for (index = 0; index < controlNodes.length; index += 1) {
            control = controlNodes[index];
            if (!control || typeof control.querySelector !== 'function' ||
                    !('hidden' in control)) {
                continue;
            }

            trigger = control.querySelector('.color-scheme-trigger');
            icon = trigger && trigger.querySelector('i');
            if (!trigger || !icon ||
                    typeof trigger.addEventListener !== 'function' ||
                    typeof trigger.setAttribute !== 'function') {
                continue;
            }

            trigger.addEventListener('click', cycleChoice);
            controls.push({
                control: control,
                trigger: trigger,
                icon: icon
            });
        }

        updateControl(root.getAttribute('data-effective-color-scheme'));
        for (index = 0; index < controls.length; index += 1) {
            controls[index].control.hidden = false;
        }
    }

    if (document.readyState === 'loading') {
        if (typeof document.addEventListener === 'function') {
            document.addEventListener('DOMContentLoaded', initializeControl);
        }
    } else {
        initializeControl();
    }
}());
