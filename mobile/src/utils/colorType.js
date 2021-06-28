export function colorType(type) {
    if (type === "fire") {
        return "red";
    } else if (type === "water") {
        return "blue";
    } else if (type === "grass") {
        return "green";
    } else if (type === "poison") {
        return "purple";
    } else if (type === "electric") {
        return "yellow";
    } else {
        return "white"
    }
}