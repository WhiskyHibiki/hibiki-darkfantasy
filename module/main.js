import { BasicActor } from "./actor/basic-actor.js";
import { BasicActorSheet } from "./actor/basic-sheet.js";

Hooks.once("init", () => {
    console.log("✅ [Hibiki DF] init");

    // 1) Подменяем класс документа Actor
    CONFIG.Actor.documentClass = BasicActor;

    // 2) Регистрируем наш лист как дефолтный
    Actors.unregisterSheet("core", ActorSheet);
    Actors.registerSheet("hibiki-darkfantasy", BasicActorSheet, { makeDefault: true });

    // 3) Если тип при создании не задан (UI/модуль), подставим "basic"
    Hooks.on("preCreateActor", (doc, data) => {
        if (!data.type) doc.updateSource({ type: "basic" });
    });
});
