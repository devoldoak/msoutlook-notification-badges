class UnreadMailWatcher {
    static onChange = async (
        documentBody, // HTML document
        callback      // callback action 
    ) => {
        setInterval(
            () => {
                const newUnreadMailsCount = 
                    OutlookWebHTMLParser.getUnreadMailsCount(documentBody) 
                    ?? currentUnreadMailsCount;

                if (BadgeStorage.get() !== newUnreadMailsCount) {
                    BadgeStorage.set(newUnreadMailsCount);
                    callback();
                }
            }, 
            1000
        );
    }
}