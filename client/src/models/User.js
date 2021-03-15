export class User {
    constructor(information = {}) {
        this.name = information.name || "Joe Biden";
        this.email = information.email || "info@mail.com";
        this.phone = information.phone || "111-111-1111";
        this.country = information.country || "Turkey";
    }
}