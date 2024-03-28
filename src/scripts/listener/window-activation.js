class WindowActivation {
    static onFocus = (
        callback      // callback action 
    ) => {
        window.onfocus = callback;
    }

    static onBlur = (
        callback      // callback action 
    ) => {
        window.onblur = callback;
    }
}