class OutlookWebHTMLParser {
    static MAIL_FOLDER_CLASS = 'div.qQbyL > div.e4_J1 .C2IG3.LPIso.oTkSL.iDEcr.OPUpK.phvtt';
    static UNREAD_MAIL_CLASS = '.WIYG1.Mt2TB';

    static getUnreadMailsCount = (
        documentBody // HTML document
    ) => parseInt(
        documentBody.
            querySelector(`${OutlookWebHTMLParser.MAIL_FOLDER_CLASS}`)?.
            querySelector(`${OutlookWebHTMLParser.UNREAD_MAIL_CLASS}`)?.
            innerHTML 
        ?? 0
    );
}