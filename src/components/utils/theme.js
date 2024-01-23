export const getTheme = () =>{
    return localStorage.getItem("theme-portfolio");
}

export const changeSetting = (theme) =>{
        localStorage.setItem("theme-portfolio",theme);
}

export const initTheme = () =>{
    if (localStorage.getItem("theme-setting") === null) {
        localStorage.setItem("theme-setting", "dark");
    }
} 