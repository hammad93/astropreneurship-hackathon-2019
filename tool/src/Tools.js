export default class Tools {
    static l_levels(lattitude, altitude) {
        return altitude / (6380 * (Math.cos(lattitude) ** 2))
    }
}