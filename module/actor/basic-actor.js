export class BasicActor extends Actor {
    prepareBaseData() {
        super.prepareBaseData?.();
        const s = (this.system ??= {});
        s.attributes ??= {};
        const a = s.attributes;
        a.strength ??= 8; a.dexterity ??= 8; a.constitution ??= 8;
        a.intelligence ??= 8; a.wisdom ??= 8; a.charisma ??= 8;

        s.ac ??= 10;
        s.hp ??= { value: 10, max: 10 };
        s.speed ??= "30 ft";
        s.level ??= 1;
        s.xp ??= 0;
        s.prof ??= 2;
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
