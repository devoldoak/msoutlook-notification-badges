class BadgeViewer {
    static OVERLAY_CLASS = 'overlay';

    static updateTaskbarBadgeIcon = () => {
        navigator.setAppBadge(
            BadgeStorage.get()
        );
    }

    static updateOverlayCount = () => {
        const overlay = document.querySelector(`.${BadgeViewer.OVERLAY_CLASS} > div`);

        if (overlay) {
            overlay.innerText = BadgeStorage.get();
        }
    }

    static createOverlay = () => {
        const overlay = document.querySelector(`.${BadgeViewer.OVERLAY_CLASS}`);

        if (!overlay) {
            const overlay = document.createElement('div');
            overlay.className = BadgeViewer.OVERLAY_CLASS;

            const notification = document.createElement('div');

            const unreadMailsCount = BadgeStorage.get();
            notification.innerText = unreadMailsCount;

            overlay.appendChild(notification);
            document.body.appendChild(overlay);
        }
    }

    static hideOverlay = () => {
        const overlay = document.querySelector(`.${BadgeViewer.OVERLAY_CLASS}`);

        if (overlay) {
            document.body.removeChild(overlay);
        }
    }
    
}