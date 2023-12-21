import Alpine from "alpinejs";

Alpine.directive('tooltip', (el, {value, modifiers, expression}, {Alpine, effect, evaluate, evaluateLater}) => {
    const config = evaluate(expression);

    el.addEventListener('mouseenter', () => {
        if (!config.offset) {
            config.offset = [0, 0];
        }
        if (!config.html) {
            config.html = true;
        }
        if (!config.trigger) {
            config.trigger = 'hover';
        }

        el._tooltip = new bootstrap.Tooltip(el, config);
        el._tooltip.show();
    });

    el.addEventListener('mouseleave', () => {
        if (el._tooltip) {
            el._tooltip.dispose();
            delete el._tooltip;
        }
    });
});
