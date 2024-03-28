const main = async () => {
    // Check for navigator.setAppBadge availability
    if (navigator.setAppBadge) {

        // When new email is display in DOM
        UnreadMailWatcher.onChange(
            document,
            () => {
                BadgeViewer.updateTaskbarBadgeIcon();
                BadgeViewer.updateOverlayCount();
            }
        );

        WindowActivation.onFocus(() => {
            BadgeViewer.updateTaskbarBadgeIcon();
            BadgeViewer.hideOverlay();
        });

        WindowActivation.onBlur(() => {
            BadgeViewer.createOverlay();
        });
    }
}
main();