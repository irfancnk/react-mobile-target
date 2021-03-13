const proxy = Object.freeze({
    "URL": "https://api.github.com"
});

function getProxy(service) {
    return `${proxy.URL}/${service}/`;
}

export default getProxy;

