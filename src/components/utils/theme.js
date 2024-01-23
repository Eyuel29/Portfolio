export const getTheme = () =>{
    return localStorage.getItem("theme-setting");
}

export const changeSetting = (theme) =>{
        localStorage.setItem("theme-setting",theme);
}

export const initTheme = () =>{
    if (localStorage.getItem("theme-setting") === null) {
        localStorage.setItem("theme-setting", "dark");
    }
} 