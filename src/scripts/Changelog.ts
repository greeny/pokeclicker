const changelogType = {
    VERSION: '<code>',
    NEW: '<span class="badge badge-success">NEW</span>',
    CHANGE: '<span class="badge badge-primary">CHANGE</span>',
    FIXED: '<span class="badge badge-warning">FIXED</span>',
    REMOVED: '<span class="badge badge-danger">REMOVED</span>',
    DEFAULT: '<span class="badge badge-default">-</span>', // unused - can be changed
    INFO: '<span class="badge badge-info">INFO</span>', // unused - can be changed
};

class Changelog {
    public type: string;
    public description: string;

    constructor(type: string, description: string) {
        this.type = type;
        this.description = description;
        if (type == changelogType.VERSION) {
            this.description += '</code>';
        }
    }
}

/**
 * TODO(@Isha) Change to unreleased changedlog and add an explanation on how to use it
 */
const unreleasedChangelogItems = [new Changelog(changelogType.INFO, 'Do not add anything to this list yet')];

/**
 * Add your changes to the top of the changelog. Please do not increase the version number.
 *
 * MAJOR - Will stay at 0 during development, 1 after the first public release
 * MINOR - Will increment for each feature refactor or large changes to a feature
 * PATCH - Increment for small changes, bugfixes, UI changes.
 */
const changelogItems = [
    // Unreleased

    // v0.2.1
    new Changelog(changelogType.VERSION, 'v0.2.1'),
    new Changelog(changelogType.REMOVED, 'Remove Hoenn dungeons for now to avoid triggering errors'),

    // v0.2.0
    new Changelog(changelogType.VERSION, 'v0.2.0 Redeemable codes'),
    new Changelog(changelogType.NEW, 'Add redeemable codes to get a quick boost. You can enter them under the Save tab'),
    new Changelog(changelogType.FIXED, 'Gyms no longer reset 1 second in'),

    // v0.1.0
    new Changelog(changelogType.VERSION, 'v0.1.0 Farming refactor'),
    new Changelog(changelogType.CHANGE, 'Farming plots are a bit more expensive'),
    new Changelog(changelogType.CHANGE, 'Wailmer pail unlocks at 3 Cheri berries instead of 5'),
    new Changelog(changelogType.FIXED, 'Tooltips no longer overstay their welcome on the Farm'),

    // v0.0.5
    new Changelog(changelogType.VERSION, 'v0.0.5'),
    new Changelog(changelogType.NEW, 'Can now use spacebar to start Gym/Dungeon'),
    new Changelog(changelogType.FIXED, 'Stones now work with multiple evolutions'),
    new Changelog(changelogType.FIXED, 'Pokemon will no longer evolve into evolutions you have already obtained'),
    new Changelog(changelogType.FIXED, 'Can obtain Pokemon from future generations by re-breeding'),
    new Changelog(changelogType.FIXED, 'Devolutions are obtained when breeding evolved forms'),
    new Changelog(changelogType.NEW, 'Add setting to toggle egg percentage/step count'),
    new Changelog(changelogType.CHANGE, 'Total shiny Pokemon caught no longer adds to your click attack'),
    new Changelog(changelogType.CHANGE, 'Halve xp needed to upgrade Oak items'),
    new Changelog(changelogType.FIXED, 'BattleItems now buy correctly'),
    new Changelog(changelogType.CHANGE, 'Increase dungeon tokens received when catching Pokemon'),
    new Changelog(changelogType.CHANGE, 'Going to the breeder will no longer send you to route 5'),
    new Changelog(changelogType.CHANGE, 'You will now start the game with 25 Pokeballs'),
    new Changelog(changelogType.CHANGE, 'Tutorial quest buy Pokeballs amount reduced'),
    new Changelog(changelogType.FIXED, 'Selecting "max" in store will no longer freeze the game for key items'),

    // v0.0.4 - 01-01-2020
    new Changelog(changelogType.VERSION, 'v0.0.4'),
    new Changelog(changelogType.NEW, 'Show pokeball image by caught Pokemon in the Pokedex'),
    new Changelog(changelogType.CHANGE, 'Show the reason you cannot access a location'),
    new Changelog(changelogType.CHANGE, 'Total shiny Pokemon caught now add to your total click attack'),
    new Changelog(changelogType.FIXED, 'Display floored dungeon tokens amount'),

    // v0.0.3
    new Changelog(changelogType.VERSION, 'v0.0.3'),
    new Changelog(changelogType.NEW, 'Can now progress in multiple quest at a time <i>(amount based on Quest Level)</i>'),
    new Changelog(changelogType.NEW, 'Side cards can now be collapsed for more space'),
    new Changelog(changelogType.CHANGE, 'Move battle item container'),
    new Changelog(changelogType.CHANGE, 'Update how achievement percentages are shown'),
    new Changelog(changelogType.CHANGE, 'Update hatch/catch notification message'),
    new Changelog(changelogType.FIXED, 'Show the hatchery "list" button once Johto unlocked without page refresh'),
    new Changelog(changelogType.FIXED, 'Plates from underground should now sell for their correct value'),

    // v0.0.2
    new Changelog(changelogType.VERSION, 'v0.0.2'),
    new Changelog(changelogType.NEW, 'Added changelog'),
    new Changelog(changelogType.CHANGE, 'Show battle item names and descriptions'),
    new Changelog(changelogType.FIXED, 'Item magnet now works in dungeons'),
    new Changelog(changelogType.FIXED, 'Battle items no longer always active'),

    // v0.0.1
    new Changelog(changelogType.VERSION, 'v0.0.1'),
    new Changelog(changelogType.NEW, 'Add battle items'),
];
