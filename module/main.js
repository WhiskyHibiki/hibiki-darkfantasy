import { BasicActor } from "./actor/basic-actor.js";
import { BasicActorSheet } from "./actor/basic-sheet.js";

Hooks.once("init", () => {
    console.log("✅ [Hibiki DF] init");
    CONFIG.Actor.documentClass = BasicActor;

    Actors.unregisterSheet("core", ActorSheet);
    Actors.registerSheet("hibiki-darkfantasy", BasicActorSheet, {
        makeDefault: true,
        types: ["basic"]
    });

    Hooks.on("preCreateActor", (doc, data) => {
        if (!data.type) doc.updateSource({ type: "basic" });
    });
});
