import { writable } from 'svelte/store'

export const projectData = writable([]);
export const loading = writable(false)

const fetchProject = async () => {
    loading.set(true);
    try {
        const url = "https://darshanaswathportfolio.herokuapp.com/projects";
        const res = await fetch(url);
        const result = await res.json();
        projectData.set(result);
        loading.set(false);
    } catch (error) {
        console.log(error);
    } finally {
        loading.set(false);
    }
}

fetchProject();