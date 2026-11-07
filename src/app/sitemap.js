export const dynamic = "force-static";
export default function sitemap() {
    const base = "https://www.missionpowerland.com";
    return ["", "/about", "/manufacture-excellence", "/portfolio", "/contact",
        "/services/powerGrid", "/services/solar", "/services/civil", "/services/public"]
        .map((p) => ({ url: base + p, lastModified: new Date() }));
}