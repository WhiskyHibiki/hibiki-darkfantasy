export class BasicActorSheet extends ActorSheet {
    // 1) путь к .hbs
    get template() {
        return "systems/hibiki-darkfantasy/templates/actors/basic.hbs";
    }

    // 2) опции листа
    static get defaultOptions() {
        return foundry.utils.mergeObject(super.defaultOptions, {
            classes: ["hibiki-df", "sheet", "actor", "basic"],
            width: 800,
            height: 600
        });
    }

    getData(options) {
        const ctx = super.getData(options);
        ctx.system = this.actor.system;
        return ctx;
    }
}