export class BasicActor extends Actor {
    prepareBaseData() {
        super.prepareBaseData?.();

        // Гарантируем наличие контейнеров
        this.system ??= {};
        this.system.attributes ??= {};

        const a = this.system.attributes;
        // Дефолты — только если не задано пользователем/данными
        a.strength ??= 8;
        a.dexterity ??= 8;
        a.constitution ??= 8;
        a.intelligence ??= 8;
        a.wisdom ??= 8;
        a.charisma ??= 8;
    }

    prepareDerivedData() {
        super.prepareDerivedData?.();

        const a = this.system.attributes;
        if (!a) return;

        // Производные
        const mods = (this.system.modifiers = {});
        for (const [key, value] of Object.entries(a)) {
            // value — число (8, 10, 12 ...)
            mods[key] = Math.floor((Number(value) - 10) / 2);
        }
    }
}
