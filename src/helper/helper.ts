import { DebounceList, IntersectionObserverEntryCallback } from "@/interfaces/helpers";

let debounceList: DebounceList = {};

export const debounce = (func: Function, timeout: number = 1000) => {
    if (typeof func != 'function') return
    
    if (debounceList[func.name]) clearTimeout(debounceList[func.name]);
    debounceList[func.name] = setTimeout(() => {
        func();
        delete debounceList[func.name];
    }, timeout);
};

export const onFormSubmit = (func: Function) => (e: any) => {
    e.preventDefault();
    func();
};

export const setIntersectionObserver = (selectors: string, func: IntersectionObserverEntryCallback, options?: IntersectionObserverInit) => {
    const targets = document.querySelectorAll(selectors);

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(func);
    }, {
        ...{
            root: null,
            rootMargin: '0px',
            threshold: 0.5
        },
        ...options
    })

    targets.forEach((element) => observer.observe(element));
};