export class BasicActorSheet extends ActorSheet {

    static get defaultOptions() {
        return foundry.utils.mergeObject(super.defaultOptions, {
            classes: ["hibiki-df", "sheet", "actor", "basic"],
            templates: "systems/hibiki-darkfantasy/templates/actors/basic.hbs",
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
