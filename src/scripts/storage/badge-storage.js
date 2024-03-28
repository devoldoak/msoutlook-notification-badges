class BadgeStorage {
    static BADGE_COUNT = 0;

    static get = () => BadgeStorage.BADGE_COUNT;

    static set = (
        value
    ) => {
        BadgeStorage.BADGE_COUNT = value;
    }
}