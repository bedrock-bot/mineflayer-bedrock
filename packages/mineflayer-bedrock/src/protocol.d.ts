import { Buffer } from 'buffer';


declare namespace protocolTypes {
    export type ByteArray = any; // TODO: Implement type: buffer

    export type SignedByteArray = any; // TODO: Implement type: buffer

    export type LittleString = any; // TODO: Implement type: pstring

    export type LatinString = any; // TODO: Implement type: pstring

    export type ShortArray = any; // TODO: Implement type: buffer

    export type ShortString = any; // TODO: Implement type: pstring

    export type varint64 = any;

    export type zigzag32 = any;

    export type zigzag64 = any;

    export type uuid = any;

    export type byterot = any;

    export type bitflags = any;

    export type restBuffer = any;

    export type encapsulated = any;

    export type nbt = any;

    export type lnbt = any;

    export type nbtLoop = any;

    export type enum_size_based_on_values_len = any;

    export type MapInfo = any;

    export interface TexturePackInfo {
        uuid: uuid;
        version: string;
        size: bigint;
        content_key: string;
        sub_pack_name: string;
        content_identity: string;
        has_scripts: boolean;
        addon_pack: boolean;
        rtx_enabled: boolean;
        cdn_url: string;
    }
    export interface TexturePackInfos extends Array<TexturePackInfo> {
        countType: number;
    }

    export interface ResourcePackIdVersion {
        uuid: string;
        version: string;
        name: string;
    }
    export interface ResourcePackIdVersions extends Array<ResourcePackIdVersion> {
        countType: number;
    }

    export interface ResourcePackIds extends Array<string> {
        countType: number;
    }

    export interface Experiment {
        name: string;
        enabled: boolean;
    }

    export interface Experiments extends Array<Experiment> {
        countType: number;
    }

    export enum GameMode {
        survival = "survival",
        creative = "creative",
        adventure = "adventure",
        survival_spectator = "survival_spectator",
        creative_spectator = "creative_spectator",
        fallback = "fallback",
        spectator = "spectator"
    }

    export interface GameRule {
        name: string;
        editable: boolean;
        type: any;
        value: any;
    }

    export interface GameRules extends Array<GameRule> {
        countType: number;
    }

    /**
     * CacheBlob represents a blob as used in the client side blob cache protocol. It holds a hash of its data and
     * the full data of it.
     */
    export interface Blob {
        /** Hash is the hash of the blob. The hash is computed using xxHash, and must be deterministic for the same chunk data. */
        hash: bigint;
        /** Payload is the data of the blob. When sent, the client will associate the Hash of the blob with the Payload in it. */
        payload: Buffer;
    }

    export interface BlockPropertie {
        name: string;
        state: nbt;
    }
    export interface BlockProperties extends Array<BlockPropertie> {
        countType: number;
    }

    export interface Itemstate {
        name: string;
        runtime_id: number;
        component_based: boolean;
        version: any;
        nbt: nbt;
    }
    export interface Itemstates extends Array<Itemstate> {
        countType: number;
    }

    export interface ItemExtraDataWithBlockingTick {
        has_nbt: any;
        nbt: any;
        can_place_on: any;
        can_destroy: any;
        blocking_tick: bigint;
    }

    export interface ItemExtraDataWithoutBlockingTick {
        has_nbt: any;
        nbt: any;
        can_place_on: any;
        can_destroy: any;
    }

    /**
     * Same as below but without a "networkStackID" boolean
     */
    export interface ItemLegacy {
        network_id: number;
        undefined: any;
    }

    /**
     * An "ItemStack" here represents an Item instance. You can think about it like a pointer
     * to an item class. The data for the class gets updated with the data in the `item` field
     * As of 1.16.220, now functionally the same as `Item` just without an extra boolean when
     * server auth inventories is disabled.
     */
    export interface Item {
        network_id: number;
        undefined: any;
    }

    export interface vec3i {
        x: number;
        y: number;
        z: number;
    }

    export interface vec3li {
        x: number;
        y: number;
        z: number;
    }

    export interface vec3u {
        x: number;
        y: number;
        z: number;
    }

    export interface vec3f {
        x: number;
        y: number;
        z: number;
    }

    export interface vec2f {
        x: number;
        z: number;
    }

    export interface Vec3fopts {
        x: number | undefined;
        y: number | undefined;
        z: number | undefined;
    }

    export interface Vec2fopts {
        x: number | undefined;
        y: number | undefined;
    }

    export interface MetadataDictionary {
        /** https://github.com/pmmp/PocketMine-MP/blob/stable/src/pocketmine/entity/Entity.php#L101 */
        key: any;
        type: any;
        value: any;
    }
    export interface MetadataDictionary extends Array<MetadataDictionary> {
        countType: number;
    }

    export type MetadataFlags1 = any; // TODO: Implement type: bitflags

    export type MetadataFlags2 = any; // TODO: Implement type: bitflags

    export interface Link {
        ridden_entity_id: number;
        rider_entity_id: number;
        type: number;
        immediate: boolean;
        rider_initiated: boolean;
        /** angular velocity of the vehicle that the rider is riding. */
        angular_velocity: number;
    }

    export interface Links extends Array<Link> {
        countType: number;
    }

    export interface EntityAttribute {
        name: string;
        min: number;
        value: number;
        max: number;
    }
    export interface EntityAttributes extends Array<EntityAttribute> {
        countType: number;
    }

    export interface EntityProperties {
        ints: any;
        floats: any;
    }

    export interface Rotation {
        yaw: byterot;
        pitch: byterot;
        head_yaw: byterot;
    }

    export interface BlockCoordinates {
        x: number;
        y: number;
        z: number;
    }

    export interface PlayerAttribute {
        min: number;
        max: number;
        current: number;
        default_min: number;
        default_max: number;
        default: number;
        name: string;
        modifiers: any;
    }
    export interface PlayerAttributes extends Array<PlayerAttribute> {
        countType: number;
    }

    /**
     * UseItemTransactionData represents an inventory transaction data object sent when the client uses an item on
     * a block. Also used in PlayerAuthoritativeInput packet
     */
    export interface TransactionUseItem {
        /** ActionType is the type of the UseItem inventory transaction. It is one of the action types found above, and specifies the way the player interacted with the block. */
        action_type: any;
        /** TriggerType is the type of the trigger that caused the inventory transaction. It is one of the trigger types found in the constants above. If TriggerType is TriggerTypePlayerInput, the transaction is from the initial input of the player. If it is TriggerTypeSimulationTick, the transaction is from a simulation tick when the player is holding down the input. */
        trigger_type: any;
        /** BlockPosition is the position of the block that was interacted with. This is only really a correct block position if ActionType is not UseItemActionClickAir. */
        block_position: BlockCoordinates;
        /** BlockFace is the face of the block that was interacted with. When clicking the block, it is the face clicked. When breaking the block, it is the face that was last being hit until the block broke. */
        face: number;
        /** HotBarSlot is the hot bar slot that the player was holding while clicking the block. It should be used to ensure that the hot bar slot and held item are correctly synchronised with the server. */
        hotbar_slot: number;
        /** HeldItem is the item that was held to interact with the block. The server should check if this item is actually present in the HotBarSlot. */
        held_item: Item;
        /** Position is the position of the player at the time of interaction. For clicking a block, this is the position at that time, whereas for breaking the block it is the position at the time of breaking. */
        player_pos: vec3f;
        /** ClickedPosition is the position that was clicked relative to the block's base coordinate. It can be used to find out exactly where a player clicked the block. */
        click_pos: vec3f;
        /** BlockRuntimeID is the runtime ID of the block that was clicked. It may be used by the server to verify that the player's world client-side is synchronised with the server's. */
        block_runtime_id: number;
        /** ClientPrediction is the client's prediction on the output of the transaction. */
        client_prediction: any;
    }

    export interface TransactionAction {
        source_type: any;
        undefined: any;
        slot: number;
        old_item: Item;
        new_item: Item;
    }
    export interface TransactionActions extends Array<TransactionAction> {
        countType: number;
    }

    /**
     * The Minecraft bedrock inventory system was refactored, but not all inventory actions use the new packet.
     * This data structure holds actions that have not been updated to the new system.
     */
    export interface TransactionLegacy {
        /** LegacyRequestID is an ID that is only non-zero at times when sent by the client. The server should always send 0 for this. When this field is not 0, the LegacySetItemSlots slice below will have values in it. LegacyRequestID ties in with the ItemStackResponse packet. If this field is non-0, the server should respond with an ItemStackResponse packet. Some inventory actions such as dropping an item out of the hotbar are still one using this packet, and the ItemStackResponse packet needs to tie in with it. */
        legacy_request_id: number;
        /** `legacy_transactions` are only present if the LegacyRequestID is non-zero. These item slots inform the server of the slots that were changed during the inventory transaction, and the server should send back an ItemStackResponse packet with these slots present in it. (Or false with no slots, if rejected.) */
        legacy_transactions: any;
    }

    export interface Transaction {
        /** Old transaction system data */
        legacy: TransactionLegacy;
        /** What type of transaction took place */
        transaction_type: any;
        /** The list of inventory internal actions in this packet, e.g. inventory GUI actions */
        actions: TransactionActions;
        /** Extra data if an intenal inventory transaction did not take place, e.g. use of an item */
        transaction_data: any;
    }

    export interface ItemStacks extends Array<Item> {
        countType: number;
    }

    export interface RecipeIngredient {
        type: any;
        undefined: any;
        count: number;
    }

    export interface PotionTypeRecipe {
        input_item_id: number;
        input_item_meta: number;
        ingredient_id: number;
        ingredient_meta: number;
        output_item_id: number;
        output_item_meta: number;
    }
    export interface PotionTypeRecipes extends Array<PotionTypeRecipe> {
        countType: number;
    }

    export interface PotionContainerChangeRecipe {
        input_item_id: number;
        ingredient_id: number;
        output_item_id: number;
    }
    export interface PotionContainerChangeRecipes extends Array<PotionContainerChangeRecipe> {
        countType: number;
    }

    export interface Recipe {
        type: any;
        recipe: any;
    }
    export interface Recipes extends Array<Recipe> {
        countType: number;
    }

    export interface RecipeUnlockingRequirement {
        context: any;
        ingredients: any;
    }

    export interface SkinImage {
        width: number;
        height: number;
        data: Buffer;
    }

    export interface Skin {
        skin_id: string;
        play_fab_id: string;
        skin_resource_pack: string;
        skin_data: SkinImage;
        animations: any;
        cape_data: SkinImage;
        geometry_data: string;
        geometry_data_version: string;
        animation_data: string;
        cape_id: string;
        full_skin_id: string;
        arm_size: string;
        skin_color: string;
        personal_pieces: any;
        piece_tint_colors: any;
        premium: boolean;
        persona: boolean;
        cape_on_classic: boolean;
        primary_user: boolean;
        overriding_player_appearance: boolean;
    }

    export interface PlayerRecords {
        type: any;
        records_count: number;
        records: any;
        verified: any;
    }

    export interface Enchant {
        id: number;
        level: number;
    }

    export interface EnchantOption {
        cost: number;
        slot_flags: number;
        equip_enchants: any;
        held_enchants: any;
        self_enchants: any;
        name: string;
        option_id: number;
    }

    export enum Action {
        start_break = "start_break",
        abort_break = "abort_break",
        stop_break = "stop_break",
        get_updated_block = "get_updated_block",
        drop_item = "drop_item",
        start_sleeping = "start_sleeping",
        stop_sleeping = "stop_sleeping",
        respawn = "respawn",
        jump = "jump",
        start_sprint = "start_sprint",
        stop_sprint = "stop_sprint",
        start_sneak = "start_sneak",
        stop_sneak = "stop_sneak",
        creative_player_destroy_block = "creative_player_destroy_block",
        dimension_change_ack = "dimension_change_ack",
        start_glide = "start_glide",
        stop_glide = "stop_glide",
        build_denied = "build_denied",
        crack_break = "crack_break",
        change_skin = "change_skin",
        set_enchatnment_seed = "set_enchatnment_seed",
        swimming = "swimming",
        stop_swimming = "stop_swimming",
        start_spin_attack = "start_spin_attack",
        stop_spin_attack = "stop_spin_attack",
        interact_block = "interact_block",
        predict_break = "predict_break",
        continue_break = "continue_break",
        start_item_use_on = "start_item_use_on",
        stop_item_use_on = "stop_item_use_on",
        handled_teleport = "handled_teleport",
        missed_swing = "missed_swing",
        start_crawling = "start_crawling",
        stop_crawling = "stop_crawling",
        start_flying = "start_flying",
        stop_flying = "stop_flying",
        received_server_data = "received_server_data",
        start_using_item = "start_using_item"
    }

    /**
     * Source and Destination point to the source slot from which Count of the item stack were taken and the
     * destination slot to which this item was moved.
     */
    export interface StackRequestSlotInfo {
        /** ContainerID is the ID of the container that the slot was in. */
        slot_type: FullContainerName;
        /** Slot is the index of the slot within the container with the ContainerID above. */
        slot: number;
        /** StackNetworkID is the unique stack ID that the client assumes to be present in this slot. The server must check if these IDs match. If they do not match, servers should reject the stack request that the action holding this info was in. */
        stack_id: number;
    }

    /**
     * ItemStackRequest is sent by the client to change item stacks in an inventory. It is essentially a
     * replacement of the InventoryTransaction packet added in 1.16 for inventory specific actions, such as moving
     * items around or crafting. The InventoryTransaction packet is still used for actions such as placing blocks
     * and interacting with entities.
     */
    export interface ItemStackRequest {
        /** RequestID is a unique ID for the request. This ID is used by the server to send a response for this specific request in the ItemStackResponse packet. */
        request_id: number;
        actions: any;
        /** CustomNames is a list of custom names involved in the request. This is typically filled with one string when an anvil is used. * Used for the server to determine which strings should be filtered. Used in anvils to verify a renamed item. */
        custom_names: any;
        /** FilterCause represents the cause of any potential filtering. This is one of the constants above. */
        cause: any;
    }

    export interface ItemStackResponse {
        status: any;
        request_id: number;
        undefined: any;
    }
    export interface ItemStackResponses extends Array<ItemStackResponse> {
        countType: number;
    }

    export interface CommandOrigin {
        /** Origin is one of the values above that specifies the origin of the command. The origin may change, depending on what part of the client actually called the command. The command may be issued by a websocket server, for example. */
        type: any;
        uuid: uuid;
        request_id: string;
        player_entity_id: any;
    }

    /**
     * MapTrackedObject is an object on a map that is 'tracked' by the client, such as an entity or a block. This
     * object may move, which is handled client-side.
     */
    export interface TrackedObject {
        /** Type is the type of the tracked object. It is either MapObjectTypeEntity or MapObjectTypeBlock. */
        type: any;
        /** EntityUniqueID is the unique ID of the entity, if the tracked object was an entity. It needs not to be filled out if Type is not MapObjectTypeEntity. */
        entity_unique_id: any;
        /** BlockPosition is the position of the block, if the tracked object was a block. It needs not to be filled out if Type is not MapObjectTypeBlock. */
        block_position: any;
    }

    /**
     * MapDecoration is a fixed decoration on a map: Its position or other properties do not change automatically
     * client-side.
     */
    export interface MapDecoration {
        type: any;
        /** Rotation is the rotation of the map decoration. It is byte due to the 16 fixed directions that the map decoration may face. */
        rotation: number;
        /** X is the offset on the X axis in pixels of the decoration. */
        x: number;
        /** Y is the offset on the Y axis in pixels of the decoration. */
        y: number;
        /** Label is the name of the map decoration. This name may be of any value. */
        label: string;
        /** Colour is the colour of the map decoration. Some map decoration types have a specific colour set automatically, whereas others may be changed. */
        color_abgr: number;
    }

    export interface StructureBlockSettings {
        /** PaletteName is the name of the palette used in the structure. Currently, it seems that this field is always 'default'. */
        palette_name: string;
        /** IgnoreEntities specifies if the structure should ignore entities or include them. If set to false, entities will also show up in the exported structure. */
        ignore_entities: boolean;
        /** IgnoreBlocks specifies if the structure should ignore blocks or include them. If set to false, blocks will show up in the exported structure. */
        ignore_blocks: boolean;
        non_ticking_players_and_ticking_areas: boolean;
        /** Size is the size of the area that is about to be exported. The area exported will start at the Position + Offset, and will extend as far as Size specifies. */
        size: BlockCoordinates;
        /** Offset is the offset position that was set in the structure block. The area exported is offset by this position. **TODO**: This will be renamed to offset soon */
        structure_offset: BlockCoordinates;
        /** LastEditingPlayerUniqueID is the unique ID of the player that last edited the structure block that these settings concern. */
        last_editing_player_unique_id: number;
        /** Rotation is the rotation that the structure block should obtain. See the constants above for available options. */
        rotation: any;
        /** Mirror specifies the way the structure should be mirrored. It is either no mirror at all, mirror on the x/z axis or both. */
        mirror: any;
        animation_mode: any;
        /** How long the duration for this animation is */
        animation_duration: number;
        /** Integrity is usually 1, but may be set to a number between 0 and 1 to omit blocks randomly, using the Seed that follows. */
        integrity: number;
        /** Seed is the seed used to omit blocks if Integrity is not equal to one. If the Seed is 0, a random seed is selected to omit blocks. */
        seed: number;
        /** Pivot is the pivot around which the structure may be rotated. */
        pivot: vec3f;
    }

    /**
     * EducationSharedResourceURI is an education edition feature that is used for transmitting
     * education resource settings to clients. It contains a button name and a link URL.
     */
    export interface EducationSharedResourceURI {
        /** ButtonName is the button name of the resource URI. */
        button_name: string;
        /** LinkURI is the link URI for the resource URI. */
        link_uri: string;
    }

    export interface EducationExternalLinkSettings {
        /** URL is the external link URL. */
        url: string;
        /** DisplayName is the display name in game. */
        display_name: string;
    }

    export interface BlockUpdate {
        position: BlockCoordinates;
        runtime_id: number;
        flags: number;
        /** EntityUniqueID is the unique ID of the falling block entity that the block transitions to or that the entity transitions from. Note that for both possible values for TransitionType, the EntityUniqueID should point to the falling block entity involved. */
        entity_unique_id: number;
        /** TransitionType is the type of the transition that happened. It is either BlockToEntityTransition, when a block placed becomes a falling entity, or EntityToBlockTransition, when a falling entity hits the ground and becomes a solid block again. */
        transition_type: any;
    }

    export interface MaterialReducer {
        mix: number;
        items: any;
    }

    export enum PermissionLevel {
        visitor = "visitor",
        member = "member",
        operator = "operator",
        custom = "custom"
    }

    export enum CommandPermissionLevel {
        normal = "normal",
        operator = "operator",
        automation = "automation",
        host = "host",
        owner = "owner",
        internal = "internal"
    }

    export enum CommandPermissionLevelVarint {
        normal = "normal",
        operator = "operator",
        automation = "automation",
        host = "host",
        owner = "owner",
        internal = "internal"
    }

    export enum WindowID {
        inventory = "inventory",
        first = "first",
        last = "last",
        offhand = "offhand",
        armor = "armor",
        creative = "creative",
        hotbar = "hotbar",
        fixed_inventory = "fixed_inventory",
        ui = "ui",
        drop_contents = "drop_contents",
        beacon = "beacon",
        trading_output = "trading_output",
        trading_use_inputs = "trading_use_inputs",
        trading_input_2 = "trading_input_2",
        trading_input_1 = "trading_input_1",
        enchant_output = "enchant_output",
        enchant_material = "enchant_material",
        enchant_input = "enchant_input",
        anvil_output = "anvil_output",
        anvil_result = "anvil_result",
        anvil_material = "anvil_material",
        container_input = "container_input",
        crafting_use_ingredient = "crafting_use_ingredient",
        crafting_result = "crafting_result",
        crafting_remove_ingredient = "crafting_remove_ingredient",
        crafting_add_ingredient = "crafting_add_ingredient",
        none = "none"
    }

    export enum WindowIDVarint {
        inventory = "inventory",
        first = "first",
        last = "last",
        offhand = "offhand",
        armor = "armor",
        creative = "creative",
        hotbar = "hotbar",
        fixed_inventory = "fixed_inventory",
        ui = "ui",
        drop_contents = "drop_contents",
        beacon = "beacon",
        trading_output = "trading_output",
        trading_use_inputs = "trading_use_inputs",
        trading_input_2 = "trading_input_2",
        trading_input_1 = "trading_input_1",
        enchant_output = "enchant_output",
        enchant_material = "enchant_material",
        enchant_input = "enchant_input",
        anvil_output = "anvil_output",
        anvil_result = "anvil_result",
        anvil_material = "anvil_material",
        container_input = "container_input",
        crafting_use_ingredient = "crafting_use_ingredient",
        crafting_result = "crafting_result",
        crafting_remove_ingredient = "crafting_remove_ingredient",
        crafting_add_ingredient = "crafting_add_ingredient",
        none = "none"
    }

    export enum WindowType {
        container = "container",
        workbench = "workbench",
        furnace = "furnace",
        enchantment = "enchantment",
        brewing_stand = "brewing_stand",
        anvil = "anvil",
        dispenser = "dispenser",
        dropper = "dropper",
        hopper = "hopper",
        cauldron = "cauldron",
        minecart_chest = "minecart_chest",
        minecart_hopper = "minecart_hopper",
        horse = "horse",
        beacon = "beacon",
        structure_editor = "structure_editor",
        trading = "trading",
        command_block = "command_block",
        jukebox = "jukebox",
        armor = "armor",
        hand = "hand",
        compound_creator = "compound_creator",
        element_constructor = "element_constructor",
        material_reducer = "material_reducer",
        lab_table = "lab_table",
        loom = "loom",
        lectern = "lectern",
        grindstone = "grindstone",
        blast_furnace = "blast_furnace",
        smoker = "smoker",
        stonecutter = "stonecutter",
        cartography = "cartography",
        hud = "hud",
        jigsaw_editor = "jigsaw_editor",
        smithing_table = "smithing_table",
        chest_boat = "chest_boat",
        decorated_pot = "decorated_pot",
        crafter = "crafter",
        none = "none",
        inventory = "inventory"
    }

    export enum ContainerSlotType {
        anvil_input = "anvil_input",
        anvil_material = "anvil_material",
        anvil_result = "anvil_result",
        smithing_table_input = "smithing_table_input",
        smithing_table_material = "smithing_table_material",
        smithing_table_result = "smithing_table_result",
        armor = "armor",
        container = "container",
        beacon_payment = "beacon_payment",
        brewing_input = "brewing_input",
        brewing_result = "brewing_result",
        brewing_fuel = "brewing_fuel",
        hotbar_and_inventory = "hotbar_and_inventory",
        crafting_input = "crafting_input",
        crafting_output = "crafting_output",
        recipe_construction = "recipe_construction",
        recipe_nature = "recipe_nature",
        recipe_items = "recipe_items",
        recipe_search = "recipe_search",
        recipe_search_bar = "recipe_search_bar",
        recipe_equipment = "recipe_equipment",
        recipe_book = "recipe_book",
        enchanting_input = "enchanting_input",
        enchanting_lapis = "enchanting_lapis",
        furnace_fuel = "furnace_fuel",
        furnace_ingredient = "furnace_ingredient",
        furnace_output = "furnace_output",
        horse_equip = "horse_equip",
        hotbar = "hotbar",
        inventory = "inventory",
        shulker = "shulker",
        trade_ingredient1 = "trade_ingredient1",
        trade_ingredient2 = "trade_ingredient2",
        trade_result = "trade_result",
        offhand = "offhand",
        compcreate_input = "compcreate_input",
        compcreate_output = "compcreate_output",
        elemconstruct_output = "elemconstruct_output",
        matreduce_input = "matreduce_input",
        matreduce_output = "matreduce_output",
        labtable_input = "labtable_input",
        loom_input = "loom_input",
        loom_dye = "loom_dye",
        loom_material = "loom_material",
        loom_result = "loom_result",
        blast_furnace_ingredient = "blast_furnace_ingredient",
        smoker_ingredient = "smoker_ingredient",
        trade2_ingredient1 = "trade2_ingredient1",
        trade2_ingredient2 = "trade2_ingredient2",
        trade2_result = "trade2_result",
        grindstone_input = "grindstone_input",
        grindstone_additional = "grindstone_additional",
        grindstone_result = "grindstone_result",
        stonecutter_input = "stonecutter_input",
        stonecutter_result = "stonecutter_result",
        cartography_input = "cartography_input",
        cartography_additional = "cartography_additional",
        cartography_result = "cartography_result",
        barrel = "barrel",
        cursor = "cursor",
        creative_output = "creative_output",
        smithing_table_template = "smithing_table_template",
        crafter = "crafter",
        dynamic = "dynamic",
        registry = "registry"
    }

    export enum SoundType {
        ItemUseOn = "ItemUseOn",
        Hit = "Hit",
        Step = "Step",
        Fly = "Fly",
        Jump = "Jump",
        Break = "Break",
        Place = "Place",
        HeavyStep = "HeavyStep",
        Gallop = "Gallop",
        Fall = "Fall",
        Ambient = "Ambient",
        AmbientBaby = "AmbientBaby",
        AmbientInWater = "AmbientInWater",
        Breathe = "Breathe",
        Death = "Death",
        DeathInWater = "DeathInWater",
        DeathToZombie = "DeathToZombie",
        Hurt = "Hurt",
        HurtInWater = "HurtInWater",
        Mad = "Mad",
        Boost = "Boost",
        Bow = "Bow",
        SquishBig = "SquishBig",
        SquishSmall = "SquishSmall",
        FallBig = "FallBig",
        FallSmall = "FallSmall",
        Splash = "Splash",
        Fizz = "Fizz",
        Flap = "Flap",
        Swim = "Swim",
        Drink = "Drink",
        Eat = "Eat",
        Takeoff = "Takeoff",
        Shake = "Shake",
        Plop = "Plop",
        Land = "Land",
        Saddle = "Saddle",
        Armor = "Armor",
        MobArmorStandPlace = "MobArmorStandPlace",
        AddChest = "AddChest",
        Throw = "Throw",
        Attack = "Attack",
        AttackNoDamage = "AttackNoDamage",
        AttackStrong = "AttackStrong",
        Warn = "Warn",
        Shear = "Shear",
        Milk = "Milk",
        Thunder = "Thunder",
        Explode = "Explode",
        Fire = "Fire",
        Ignite = "Ignite",
        Fuse = "Fuse",
        Stare = "Stare",
        Spawn = "Spawn",
        Shoot = "Shoot",
        BreakBlock = "BreakBlock",
        Launch = "Launch",
        Blast = "Blast",
        LargeBlast = "LargeBlast",
        Twinkle = "Twinkle",
        Remedy = "Remedy",
        Infect = "Infect",
        LevelUp = "LevelUp",
        BowHit = "BowHit",
        BulletHit = "BulletHit",
        ExtinguishFire = "ExtinguishFire",
        ItemFizz = "ItemFizz",
        ChestOpen = "ChestOpen",
        ChestClosed = "ChestClosed",
        ShulkerBoxOpen = "ShulkerBoxOpen",
        ShulkerBoxClosed = "ShulkerBoxClosed",
        EnderChestOpen = "EnderChestOpen",
        EnderChestClosed = "EnderChestClosed",
        PowerOn = "PowerOn",
        PowerOff = "PowerOff",
        Attach = "Attach",
        Detach = "Detach",
        Deny = "Deny",
        Tripod = "Tripod",
        Pop = "Pop",
        DropSlot = "DropSlot",
        Note = "Note",
        Thorns = "Thorns",
        PistonIn = "PistonIn",
        PistonOut = "PistonOut",
        Portal = "Portal",
        Water = "Water",
        LavaPop = "LavaPop",
        Lava = "Lava",
        Burp = "Burp",
        BucketFillWater = "BucketFillWater",
        BucketFillLava = "BucketFillLava",
        BucketEmptyWater = "BucketEmptyWater",
        BucketEmptyLava = "BucketEmptyLava",
        ArmorEquipChain = "ArmorEquipChain",
        ArmorEquipDiamond = "ArmorEquipDiamond",
        ArmorEquipGeneric = "ArmorEquipGeneric",
        ArmorEquipGold = "ArmorEquipGold",
        ArmorEquipIron = "ArmorEquipIron",
        ArmorEquipLeather = "ArmorEquipLeather",
        ArmorEquipElytra = "ArmorEquipElytra",
        Record13 = "Record13",
        RecordCat = "RecordCat",
        RecordBlocks = "RecordBlocks",
        RecordChirp = "RecordChirp",
        RecordFar = "RecordFar",
        RecordMall = "RecordMall",
        RecordMellohi = "RecordMellohi",
        RecordStal = "RecordStal",
        RecordStrad = "RecordStrad",
        RecordWard = "RecordWard",
        Record11 = "Record11",
        RecordWait = "RecordWait",
        StopRecord = "StopRecord",
        Flop = "Flop",
        GuardianCurse = "GuardianCurse",
        MobWarning = "MobWarning",
        MobWarningBaby = "MobWarningBaby",
        Teleport = "Teleport",
        ShulkerOpen = "ShulkerOpen",
        ShulkerClose = "ShulkerClose",
        Haggle = "Haggle",
        HaggleYes = "HaggleYes",
        HaggleNo = "HaggleNo",
        HaggleIdle = "HaggleIdle",
        ChorusGrow = "ChorusGrow",
        ChorusDeath = "ChorusDeath",
        Glass = "Glass",
        PotionBrewed = "PotionBrewed",
        CastSpell = "CastSpell",
        PrepareAttackSpell = "PrepareAttackSpell",
        PrepareSummon = "PrepareSummon",
        PrepareWololo = "PrepareWololo",
        Fang = "Fang",
        Charge = "Charge",
        CameraTakePicture = "CameraTakePicture",
        LeashKnotPlace = "LeashKnotPlace",
        LeashKnotBreak = "LeashKnotBreak",
        AmbientGrowl = "AmbientGrowl",
        AmbientWhine = "AmbientWhine",
        AmbientPant = "AmbientPant",
        AmbientPurr = "AmbientPurr",
        AmbientPurreow = "AmbientPurreow",
        DeathMinVolume = "DeathMinVolume",
        DeathMidVolume = "DeathMidVolume",
        ImitateBlaze = "ImitateBlaze",
        ImitateCaveSpider = "ImitateCaveSpider",
        ImitateCreeper = "ImitateCreeper",
        ImitateElderGuardian = "ImitateElderGuardian",
        ImitateEnderDragon = "ImitateEnderDragon",
        ImitateEnderman = "ImitateEnderman",
        ImitateEndermite = "ImitateEndermite",
        ImitateEvocationIllager = "ImitateEvocationIllager",
        ImitateGhast = "ImitateGhast",
        ImitateHusk = "ImitateHusk",
        ImitateIllusionIllager = "ImitateIllusionIllager",
        ImitateMagmaCube = "ImitateMagmaCube",
        ImitatePolarBear = "ImitatePolarBear",
        ImitateShulker = "ImitateShulker",
        ImitateSilverfish = "ImitateSilverfish",
        ImitateSkeleton = "ImitateSkeleton",
        ImitateSlime = "ImitateSlime",
        ImitateSpider = "ImitateSpider",
        ImitateStray = "ImitateStray",
        ImitateVex = "ImitateVex",
        ImitateVindicationIllager = "ImitateVindicationIllager",
        ImitateWitch = "ImitateWitch",
        ImitateWither = "ImitateWither",
        ImitateWitherSkeleton = "ImitateWitherSkeleton",
        ImitateWolf = "ImitateWolf",
        ImitateZombie = "ImitateZombie",
        ImitateZombiePigman = "ImitateZombiePigman",
        ImitateZombieVillager = "ImitateZombieVillager",
        EnderEyePlaced = "EnderEyePlaced",
        EndPortalCreated = "EndPortalCreated",
        AnvilUse = "AnvilUse",
        BottleDragonBreath = "BottleDragonBreath",
        PortalTravel = "PortalTravel",
        TridentHit = "TridentHit",
        TridentReturn = "TridentReturn",
        TridentRiptide1 = "TridentRiptide1",
        TridentRiptide2 = "TridentRiptide2",
        TridentRiptide3 = "TridentRiptide3",
        TridentThrow = "TridentThrow",
        TridentThunder = "TridentThunder",
        TridentHitGround = "TridentHitGround",
        Default = "Default",
        FletchingTableUse = "FletchingTableUse",
        ElemConstructOpen = "ElemConstructOpen",
        IceBombHit = "IceBombHit",
        BalloonPop = "BalloonPop",
        LtReactionIceBomb = "LtReactionIceBomb",
        LtReactionBleach = "LtReactionBleach",
        LtReactionElephantToothpaste = "LtReactionElephantToothpaste",
        LtReactionElephantToothpaste2 = "LtReactionElephantToothpaste2",
        LtReactionGlowStick = "LtReactionGlowStick",
        LtReactionGlowStick2 = "LtReactionGlowStick2",
        LtReactionLuminol = "LtReactionLuminol",
        LtReactionSalt = "LtReactionSalt",
        LtReactionFertilizer = "LtReactionFertilizer",
        LtReactionFireball = "LtReactionFireball",
        LtReactionMagnesiumSalt = "LtReactionMagnesiumSalt",
        LtReactionMiscFire = "LtReactionMiscFire",
        LtReactionFire = "LtReactionFire",
        LtReactionMiscExplosion = "LtReactionMiscExplosion",
        LtReactionMiscMystical = "LtReactionMiscMystical",
        LtReactionMiscMystical2 = "LtReactionMiscMystical2",
        LtReactionProduct = "LtReactionProduct",
        SparklerUse = "SparklerUse",
        GlowStickUse = "GlowStickUse",
        SparklerActive = "SparklerActive",
        ConvertToDrowned = "ConvertToDrowned",
        BucketFillFish = "BucketFillFish",
        BucketEmptyFish = "BucketEmptyFish",
        BubbleColumnUpwards = "BubbleColumnUpwards",
        BubbleColumnDownwards = "BubbleColumnDownwards",
        BubblePop = "BubblePop",
        BubbleUpInside = "BubbleUpInside",
        BubbleDownInside = "BubbleDownInside",
        HurtBaby = "HurtBaby",
        DeathBaby = "DeathBaby",
        StepBaby = "StepBaby",
        SpawnBaby = "SpawnBaby",
        Born = "Born",
        TurtleEggBreak = "TurtleEggBreak",
        TurtleEggCrack = "TurtleEggCrack",
        TurtleEggHatched = "TurtleEggHatched",
        LayEgg = "LayEgg",
        TurtleEggAttacked = "TurtleEggAttacked",
        BeaconActivate = "BeaconActivate",
        BeaconAmbient = "BeaconAmbient",
        BeaconDeactivate = "BeaconDeactivate",
        BeaconPower = "BeaconPower",
        ConduitActivate = "ConduitActivate",
        ConduitAmbient = "ConduitAmbient",
        ConduitAttack = "ConduitAttack",
        ConduitDeactivate = "ConduitDeactivate",
        ConduitShort = "ConduitShort",
        Swoop = "Swoop",
        BambooSaplingPlace = "BambooSaplingPlace",
        PreSneeze = "PreSneeze",
        Sneeze = "Sneeze",
        AmbientTame = "AmbientTame",
        Scared = "Scared",
        ScaffoldingClimb = "ScaffoldingClimb",
        CrossbowLoadingStart = "CrossbowLoadingStart",
        CrossbowLoadingMiddle = "CrossbowLoadingMiddle",
        CrossbowLoadingEnd = "CrossbowLoadingEnd",
        CrossbowShoot = "CrossbowShoot",
        CrossbowQuickChargeStart = "CrossbowQuickChargeStart",
        CrossbowQuickChargeMiddle = "CrossbowQuickChargeMiddle",
        CrossbowQuickChargeEnd = "CrossbowQuickChargeEnd",
        AmbientAggressive = "AmbientAggressive",
        AmbientWorried = "AmbientWorried",
        CantBreed = "CantBreed",
        ShieldBlock = "ShieldBlock",
        LecternBookPlace = "LecternBookPlace",
        GrindstoneUse = "GrindstoneUse",
        Bell = "Bell",
        CampfireCrackle = "CampfireCrackle",
        Roar = "Roar",
        Stun = "Stun",
        SweetBerryBushHurt = "SweetBerryBushHurt",
        SweetBerryBushPick = "SweetBerryBushPick",
        CartographyTableUse = "CartographyTableUse",
        StonecutterUse = "StonecutterUse",
        ComposterEmpty = "ComposterEmpty",
        ComposterFill = "ComposterFill",
        ComposterFillLayer = "ComposterFillLayer",
        ComposterReady = "ComposterReady",
        BarrelOpen = "BarrelOpen",
        BarrelClose = "BarrelClose",
        RaidHorn = "RaidHorn",
        LoomUse = "LoomUse",
        AmbientInRaid = "AmbientInRaid",
        UicartographyTableUse = "UicartographyTableUse",
        UistonecutterUse = "UistonecutterUse",
        UiloomUse = "UiloomUse",
        SmokerUse = "SmokerUse",
        BlastFurnaceUse = "BlastFurnaceUse",
        SmithingTableUse = "SmithingTableUse",
        Screech = "Screech",
        Sleep = "Sleep",
        FurnaceUse = "FurnaceUse",
        MooshroomConvert = "MooshroomConvert",
        MilkSuspiciously = "MilkSuspiciously",
        Celebrate = "Celebrate",
        JumpPrevent = "JumpPrevent",
        AmbientPollinate = "AmbientPollinate",
        BeehiveDrip = "BeehiveDrip",
        BeehiveEnter = "BeehiveEnter",
        BeehiveExit = "BeehiveExit",
        BeehiveWork = "BeehiveWork",
        BeehiveShear = "BeehiveShear",
        HoneybottleDrink = "HoneybottleDrink",
        AmbientCave = "AmbientCave",
        Retreat = "Retreat",
        ConvertToZombified = "ConvertToZombified",
        Admire = "Admire",
        StepLava = "StepLava",
        Tempt = "Tempt",
        Panic = "Panic",
        Angry = "Angry",
        AmbientMoodWarpedForest = "AmbientMoodWarpedForest",
        AmbientMoodSoulsandValley = "AmbientMoodSoulsandValley",
        AmbientMoodNetherWastes = "AmbientMoodNetherWastes",
        AmbientMoodBasaltDeltas = "AmbientMoodBasaltDeltas",
        AmbientMoodCrimsonForest = "AmbientMoodCrimsonForest",
        RespawnAnchorCharge = "RespawnAnchorCharge",
        RespawnAnchorDeplete = "RespawnAnchorDeplete",
        RespawnAnchorSetSpawn = "RespawnAnchorSetSpawn",
        RespawnAnchorAmbient = "RespawnAnchorAmbient",
        SoulEscapeQuiet = "SoulEscapeQuiet",
        SoulEscapeLoud = "SoulEscapeLoud",
        RecordPigstep = "RecordPigstep",
        LinkCompassToLodestone = "LinkCompassToLodestone",
        UseSmithingTable = "UseSmithingTable",
        EquipNetherite = "EquipNetherite",
        AmbientLoopWarpedForest = "AmbientLoopWarpedForest",
        AmbientLoopSoulsandValley = "AmbientLoopSoulsandValley",
        AmbientLoopNetherWastes = "AmbientLoopNetherWastes",
        AmbientLoopBasaltDeltas = "AmbientLoopBasaltDeltas",
        AmbientLoopCrimsonForest = "AmbientLoopCrimsonForest",
        AmbientAdditionWarpedForest = "AmbientAdditionWarpedForest",
        AmbientAdditionSoulsandValley = "AmbientAdditionSoulsandValley",
        AmbientAdditionNetherWastes = "AmbientAdditionNetherWastes",
        AmbientAdditionBasaltDeltas = "AmbientAdditionBasaltDeltas",
        AmbientAdditionCrimsonForest = "AmbientAdditionCrimsonForest",
        SculkSensorPowerOn = "SculkSensorPowerOn",
        SculkSensorPowerOff = "SculkSensorPowerOff",
        BucketFillPowderSnow = "BucketFillPowderSnow",
        BucketEmptyPowderSnow = "BucketEmptyPowderSnow",
        PointedDripstoneCauldronDripWater = "PointedDripstoneCauldronDripWater",
        PointedDripstoneCauldronDripLava = "PointedDripstoneCauldronDripLava",
        PointedDripstoneDripWater = "PointedDripstoneDripWater",
        PointedDripstoneDripLava = "PointedDripstoneDripLava",
        CaveVinesPickBerries = "CaveVinesPickBerries",
        BigDripleafTiltDown = "BigDripleafTiltDown",
        BigDripleafTiltUp = "BigDripleafTiltUp",
        CopperWaxOn = "CopperWaxOn",
        CopperWaxOff = "CopperWaxOff",
        Scrape = "Scrape",
        PlayerHurtDrown = "PlayerHurtDrown",
        PlayerHurtOnFire = "PlayerHurtOnFire",
        PlayerHurtFreeze = "PlayerHurtFreeze",
        UseSpyglass = "UseSpyglass",
        StopUsingSpyglass = "StopUsingSpyglass",
        AmethystBlockChime = "AmethystBlockChime",
        AmbientScreamer = "AmbientScreamer",
        HurtScreamer = "HurtScreamer",
        DeathScreamer = "DeathScreamer",
        MilkScreamer = "MilkScreamer",
        JumpToBlock = "JumpToBlock",
        PreRam = "PreRam",
        PreRamScreamer = "PreRamScreamer",
        RamImpact = "RamImpact",
        RamImpactScreamer = "RamImpactScreamer",
        SquidInkSquirt = "SquidInkSquirt",
        GlowSquidInkSquirt = "GlowSquidInkSquirt",
        ConvertToStray = "ConvertToStray",
        CakeAddCandle = "CakeAddCandle",
        ExtinguishCandle = "ExtinguishCandle",
        AmbientCandle = "AmbientCandle",
        BlockClick = "BlockClick",
        BlockClickFail = "BlockClickFail",
        SculkCatalystBloom = "SculkCatalystBloom",
        SculkShriekerShriek = "SculkShriekerShriek",
        WardenNearbyClose = "WardenNearbyClose",
        WardenNearbyCloser = "WardenNearbyCloser",
        WardenNearbyClosest = "WardenNearbyClosest",
        WardenSlightlyAngry = "WardenSlightlyAngry",
        RecordOtherside = "RecordOtherside",
        Tongue = "Tongue",
        CrackIronGolem = "CrackIronGolem",
        RepairIronGolem = "RepairIronGolem",
        Listening = "Listening",
        Heartbeat = "Heartbeat",
        HornBreak = "HornBreak",
        SculkPlace = "SculkPlace",
        SculkSpread = "SculkSpread",
        SculkCharge = "SculkCharge",
        SculkSensorPlace = "SculkSensorPlace",
        SculkShriekerPlace = "SculkShriekerPlace",
        goat_call_0 = "goat_call_0",
        goat_call_1 = "goat_call_1",
        goat_call_2 = "goat_call_2",
        goat_call_3 = "goat_call_3",
        goat_call_4 = "goat_call_4",
        goat_call_5 = "goat_call_5",
        goat_call_6 = "goat_call_6",
        goat_call_7 = "goat_call_7",
        goat_call_8 = "goat_call_8",
        goat_call_9 = "goat_call_9",
        goat_harmony_0 = "goat_harmony_0",
        goat_harmony_1 = "goat_harmony_1",
        goat_harmony_2 = "goat_harmony_2",
        goat_harmony_3 = "goat_harmony_3",
        goat_harmony_4 = "goat_harmony_4",
        goat_harmony_5 = "goat_harmony_5",
        goat_harmony_6 = "goat_harmony_6",
        goat_harmony_7 = "goat_harmony_7",
        goat_harmony_8 = "goat_harmony_8",
        goat_harmony_9 = "goat_harmony_9",
        goat_melody_0 = "goat_melody_0",
        goat_melody_1 = "goat_melody_1",
        goat_melody_2 = "goat_melody_2",
        goat_melody_3 = "goat_melody_3",
        goat_melody_4 = "goat_melody_4",
        goat_melody_5 = "goat_melody_5",
        goat_melody_6 = "goat_melody_6",
        goat_melody_7 = "goat_melody_7",
        goat_melody_8 = "goat_melody_8",
        goat_melody_9 = "goat_melody_9",
        goat_bass_0 = "goat_bass_0",
        goat_bass_1 = "goat_bass_1",
        goat_bass_2 = "goat_bass_2",
        goat_bass_3 = "goat_bass_3",
        goat_bass_4 = "goat_bass_4",
        goat_bass_5 = "goat_bass_5",
        goat_bass_6 = "goat_bass_6",
        goat_bass_7 = "goat_bass_7",
        goat_bass_8 = "goat_bass_8",
        goat_bass_9 = "goat_bass_9",
        unknow5 = "_",
        unknow6 = "_",
        unknow7 = "_",
        ImitateWarden = "ImitateWarden",
        ListeningAngry = "ListeningAngry",
        ItemGiven = "ItemGiven",
        ItemTaken = "ItemTaken",
        Disappeared = "Disappeared",
        Reappeared = "Reappeared",
        DrinkMilk = "DrinkMilk",
        FrogspawnHatched = "FrogspawnHatched",
        LaySpawn = "LaySpawn",
        FrogspawnBreak = "FrogspawnBreak",
        SonicBoom = "SonicBoom",
        SonicCharge = "SonicCharge",
        SoundeventItemThrown = "SoundeventItemThrown",
        Record5 = "Record5",
        ConvertToFrog = "ConvertToFrog",
        RecordPlaying = "RecordPlaying",
        EnchantingTableUse = "EnchantingTableUse",
        StepSand = "StepSand",
        DashReady = "DashReady",
        BundleDropContents = "BundleDropContents",
        BundleInsert = "BundleInsert",
        BundleRemoveOne = "BundleRemoveOne",
        PressurePlateClickOff = "PressurePlateClickOff",
        PressurePlateClickOn = "PressurePlateClickOn",
        ButtonClickOff = "ButtonClickOff",
        ButtonClickOn = "ButtonClickOn",
        DoorOpen = "DoorOpen",
        DoorClose = "DoorClose",
        TrapdoorOpen = "TrapdoorOpen",
        TrapdoorClose = "TrapdoorClose",
        FenceGateOpen = "FenceGateOpen",
        FenceGateClose = "FenceGateClose",
        Insert = "Insert",
        Pickup = "Pickup",
        InsertEnchanted = "InsertEnchanted",
        PickupEnchanted = "PickupEnchanted",
        Brush = "Brush",
        BrushCompleted = "BrushCompleted",
        ShatterDecoratedPot = "ShatterDecoratedPot",
        BreakDecoratedPot = "BreakDecoratedPot",
        SnifferEggCrack = "SnifferEggCrack",
        SnifferEggHatched = "SnifferEggHatched",
        WaxedSignInteractFail = "WaxedSignInteractFail",
        RecordRelic = "RecordRelic",
        Bump = "Bump",
        PumpkinCarve = "PumpkinCarve",
        ConvertHuskToZombie = "ConvertHuskToZombie",
        PigDeath = "PigDeath",
        HoglinZombified = "HoglinZombified",
        AmbientUnderwaterEnter = "AmbientUnderwaterEnter",
        AmbientUnderwaterExit = "AmbientUnderwaterExit",
        bottle_fill = "bottle_fill",
        bottle_empty = "bottle_empty",
        crafter_craft = "crafter_craft",
        crafter_fail = "crafter_fail",
        block_decorated_pot_insert = "block_decorated_pot_insert",
        block_decorated_pot_insert_fail = "block_decorated_pot_insert_fail",
        crafter_disable_slot = "crafter_disable_slot",
        trial_spawner_open_shutter = "trial_spawner_open_shutter",
        trial_spawner_eject_item = "trial_spawner_eject_item",
        trial_spawner_detect_player = "trial_spawner_detect_player",
        trial_spawner_spawn_mob = "trial_spawner_spawn_mob",
        trial_spawner_close_shutter = "trial_spawner_close_shutter",
        trial_spawner_ambient = "trial_spawner_ambient",
        block_copper_bulb_turn_on = "block_copper_bulb_turn_on",
        block_copper_bulb_turn_off = "block_copper_bulb_turn_off",
        ambient_in_air = "ambient_in_air",
        breeze_wind_charge_burst = "breeze_wind_charge_burst",
        imitate_breeze = "imitate_breeze",
        mob_armadillo_brush = "mob_armadillo_brush",
        mob_armadillo_scute_drop = "mob_armadillo_scute_drop",
        armor_equip_wolf = "armor_equip_wolf",
        armor_unequip_wolf = "armor_unequip_wolf",
        reflect = "reflect",
        vault_open_shutter = "vault_open_shutter",
        vault_close_shutter = "vault_close_shutter",
        vault_eject_item = "vault_eject_item",
        vault_insert_item = "vault_insert_item",
        vault_insert_item_fail = "vault_insert_item_fail",
        vault_ambient = "vault_ambient",
        vault_activate = "vault_activate",
        vault_deactivate = "vault_deactivate",
        hurt_reduced = "hurt_reduced",
        wind_charge_burst = "wind_charge_burst",
        imitate_drowned = "imitate_drowned",
        imitate_creaking = "imitate_creaking",
        bundle_insert_failed = "bundle_insert_failed",
        sponge_absorb = "sponge_absorb",
        unknow2 = "_",
        block_creaking_heart_trail = "block_creaking_heart_trail",
        creaking_heart_spawn = "creaking_heart_spawn",
        activate = "activate",
        deactivate = "deactivate",
        freeze = "freeze",
        unfreeze = "unfreeze",
        open = "open",
        open_long = "open_long",
        close = "close",
        close_long = "close_long",
        imitate_phantom = "imitate_phantom",
        imitate_zoglin = "imitate_zoglin",
        imitate_guardian = "imitate_guardian",
        imitate_ravager = "imitate_ravager",
        imitate_pillager = "imitate_pillager",
        place_in_water = "place_in_water",
        state_change = "state_change",
        imitate_happy_ghast = "imitate_happy_ghast",
        unique_generic = "unique_generic",
        record_tears = "record_tears",
        the_end_light_flash = "the_end_light_flash",
        lead_leash = "lead_leash",
        lead_unleash = "lead_unleash",
        lead_break = "lead_break",
        unsaddle = "unsaddle",
        armor_crack_wolf = "armor_crack_wolf",
        armor_break_wolf = "armor_break_wolf",
        armor_repair_wolf = "armor_repair_wolf",
        mace_smash_air = "mace_smash_air",
        mace_smash_ground = "mace_smash_ground",
        trail_spawner_charge_activate = "trail_spawner_charge_activate",
        trail_spawner_ambient_ominous = "trail_spawner_ambient_ominous",
        ominous_item_spawner_spawn_item = "ominous_item_spawner_spawn_item",
        ominous_bottle_end_use = "ominous_bottle_end_use",
        mace_smash_heavy_ground = "mace_smash_heavy_ground",
        ominous_item_spawner_spawn_item_begin = "ominous_item_spawner_spawn_item_begin",
        unknow1 = "_",
        apply_effect_bad_omen = "apply_effect_bad_omen",
        apply_effect_raid_omen = "apply_effect_raid_omen",
        apply_effect_trial_omen = "apply_effect_trial_omen",
        ominous_item_spawner_about_to_spawn_item = "ominous_item_spawner_about_to_spawn_item",
        record_creator = "record_creator",
        record_creator_music_box = "record_creator_music_box",
        record_precipice = "record_precipice"
    }

    export enum LegacyEntityType {
        chicken = "chicken",
        cow = "cow",
        pig = "pig",
        sheep = "sheep",
        wolf = "wolf",
        villager = "villager",
        mooshroom = "mooshroom",
        squid = "squid",
        rabbit = "rabbit",
        bat = "bat",
        iron_golem = "iron_golem",
        snow_golem = "snow_golem",
        ocelot = "ocelot",
        horse = "horse",
        donkey = "donkey",
        mule = "mule",
        skeleton_horse = "skeleton_horse",
        zombie_horse = "zombie_horse",
        polar_bear = "polar_bear",
        llama = "llama",
        parrot = "parrot",
        dolphin = "dolphin",
        zombie = "zombie",
        creeper = "creeper",
        skeleton = "skeleton",
        spider = "spider",
        zombie_pigman = "zombie_pigman",
        slime = "slime",
        enderman = "enderman",
        silverfish = "silverfish",
        cave_spider = "cave_spider",
        ghast = "ghast",
        magma_cube = "magma_cube",
        blaze = "blaze",
        zombie_villager = "zombie_villager",
        witch = "witch",
        stray = "stray",
        husk = "husk",
        wither_skeleton = "wither_skeleton",
        guardian = "guardian",
        elder_guardian = "elder_guardian",
        npc = "npc",
        wither = "wither",
        ender_dragon = "ender_dragon",
        shulker = "shulker",
        endermite = "endermite",
        agent = "agent",
        vindicator = "vindicator",
        phantom = "phantom",
        armor_stand = "armor_stand",
        tripod_camera = "tripod_camera",
        player = "player",
        item = "item",
        tnt = "tnt",
        falling_block = "falling_block",
        moving_block = "moving_block",
        xp_bottle = "xp_bottle",
        xp_orb = "xp_orb",
        eye_of_ender_signal = "eye_of_ender_signal",
        ender_crystal = "ender_crystal",
        fireworks_rocket = "fireworks_rocket",
        thrown_trident = "thrown_trident",
        turtle = "turtle",
        cat = "cat",
        shulker_bullet = "shulker_bullet",
        fishing_hook = "fishing_hook",
        chalkboard = "chalkboard",
        dragon_fireball = "dragon_fireball",
        arrow = "arrow",
        snowball = "snowball",
        egg = "egg",
        painting = "painting",
        minecart = "minecart",
        fireball = "fireball",
        splash_potion = "splash_potion",
        ender_pearl = "ender_pearl",
        leash_knot = "leash_knot",
        wither_skull = "wither_skull",
        boat = "boat",
        wither_skull_dangerous = "wither_skull_dangerous",
        lightning_bolt = "lightning_bolt",
        small_fireball = "small_fireball",
        area_effect_cloud = "area_effect_cloud",
        hopper_minecart = "hopper_minecart",
        tnt_minecart = "tnt_minecart",
        chest_minecart = "chest_minecart",
        command_block_minecart = "command_block_minecart",
        lingering_potion = "lingering_potion",
        llama_spit = "llama_spit",
        evocation_fang = "evocation_fang",
        evocation_illager = "evocation_illager",
        vex = "vex",
        ice_bomb = "ice_bomb",
        balloon = "balloon",
        pufferfish = "pufferfish",
        salmon = "salmon",
        drowned = "drowned",
        tropicalfish = "tropicalfish",
        cod = "cod",
        panda = "panda"
    }

    export enum DeviceOS {
        Undefined = "Undefined",
        Android = "Android",
        IOS = "IOS",
        OSX = "OSX",
        FireOS = "FireOS",
        GearVR = "GearVR",
        Hololens = "Hololens",
        Win10 = "Win10",
        Win32 = "Win32",
        Dedicated = "Dedicated",
        TVOS = "TVOS",
        Orbis = "Orbis",
        NintendoSwitch = "NintendoSwitch",
        Xbox = "Xbox",
        WindowsPhone = "WindowsPhone",
        Linux = "Linux"
    }

    export type AbilitySet = any; // TODO: Implement type: bitflags

    /**
     * AbilityLayer represents the abilities of a specific layer, such as the base layer or the spectator layer.
     */
    export interface AbilityLayers {
        /** Type represents the type of the layer. This is one of the AbilityLayerType constants defined above. */
        type: any;
        /** The abilities that can be toggled between */
        allowed: AbilitySet;
        /** The abilities that are currently active */
        enabled: AbilitySet;
        /** FlySpeed is the default horizontal fly speed of the layer. */
        fly_speed: number;
        /** VerticalFlySpeed is the default vertical fly speed of the layer. */
        vertical_fly_speed: number;
        /** WalkSpeed is the default walk speed of the layer. */
        walk_speed: number;
    }

    export interface CameraPresets {
        /** Name is the name of the preset. Each preset must have their own unique name. */
        name: string;
        /** Parent is the name of the preset that this preset extends upon. This can be left empty. */
        parent: string;
        position: Vec3fopts;
        rotation: Vec2fopts;
        rotation_speed: number | undefined;
        snap_to_target: boolean | undefined;
        horizontal_rotation_limit: vec2f | undefined;
        vertical_rotation_limit: vec2f | undefined;
        continue_targeting: boolean | undefined;
        tracking_radius: number | undefined;
        offset: vec2f | undefined;
        entity_offset: vec3f | undefined;
        radius: number | undefined;
        yaw_limit_min: number | undefined;
        yaw_limit_max: number | undefined;
        audio_listener: number | undefined;
        player_effects: boolean | undefined;
        aim_assist: any | undefined;
        control_scheme: any | undefined;
    }

    export enum DisconnectFailReason {
        unknown = "unknown",
        cant_connect_no_internet = "cant_connect_no_internet",
        no_permissions = "no_permissions",
        unrecoverable_error = "unrecoverable_error",
        third_party_blocked = "third_party_blocked",
        third_party_no_internet = "third_party_no_internet",
        third_party_bad_ip = "third_party_bad_ip",
        third_party_no_server_or_server_locked = "third_party_no_server_or_server_locked",
        version_mismatch = "version_mismatch",
        skin_issue = "skin_issue",
        invite_session_not_found = "invite_session_not_found",
        edu_level_settings_missing = "edu_level_settings_missing",
        local_server_not_found = "local_server_not_found",
        legacy_disconnect = "legacy_disconnect",
        user_leave_game_attempted = "user_leave_game_attempted",
        platform_locked_skins_error = "platform_locked_skins_error",
        realms_world_unassigned = "realms_world_unassigned",
        realms_server_cant_connect = "realms_server_cant_connect",
        realms_server_hidden = "realms_server_hidden",
        realms_server_disabled_beta = "realms_server_disabled_beta",
        realms_server_disabled = "realms_server_disabled",
        cross_platform_disallowed = "cross_platform_disallowed",
        cant_connect = "cant_connect",
        session_not_found = "session_not_found",
        client_settings_incompatible_with_server = "client_settings_incompatible_with_server",
        server_full = "server_full",
        invalid_platform_skin = "invalid_platform_skin",
        edition_version_mismatch = "edition_version_mismatch",
        edition_mismatch = "edition_mismatch",
        level_newer_than_exe_version = "level_newer_than_exe_version",
        no_fail_occurred = "no_fail_occurred",
        banned_skin = "banned_skin",
        timeout = "timeout",
        server_not_found = "server_not_found",
        outdated_server = "outdated_server",
        outdated_client = "outdated_client",
        no_premium_platform = "no_premium_platform",
        multiplayer_disabled = "multiplayer_disabled",
        no_wifi = "no_wifi",
        world_corruption = "world_corruption",
        no_reason = "no_reason",
        disconnected = "disconnected",
        invalid_player = "invalid_player",
        logged_in_other_location = "logged_in_other_location",
        server_id_conflict = "server_id_conflict",
        not_allowed = "not_allowed",
        not_authenticated = "not_authenticated",
        invalid_tenant = "invalid_tenant",
        unknown_packet = "unknown_packet",
        unexpected_packet = "unexpected_packet",
        invalid_command_request_packet = "invalid_command_request_packet",
        host_suspended = "host_suspended",
        login_packet_no_request = "login_packet_no_request",
        login_packet_no_cert = "login_packet_no_cert",
        missing_client = "missing_client",
        kicked = "kicked",
        kicked_for_exploit = "kicked_for_exploit",
        kicked_for_idle = "kicked_for_idle",
        resource_pack_problem = "resource_pack_problem",
        incompatible_pack = "incompatible_pack",
        out_of_storage = "out_of_storage",
        invalid_level = "invalid_level",
        disconnect_packet_deprecated = "disconnect_packet_deprecated",
        block_mismatch = "block_mismatch",
        invalid_heights = "invalid_heights",
        invalid_widths = "invalid_widths",
        connection_lost = "connection_lost",
        zombie_connection = "zombie_connection",
        shutdown = "shutdown",
        reason_not_set = "reason_not_set",
        loading_state_timeout = "loading_state_timeout",
        resource_pack_loading_failed = "resource_pack_loading_failed",
        searching_for_session_loading_screen_failed = "searching_for_session_loading_screen_failed",
        conn_protocol_version = "conn_protocol_version",
        subsystem_status_error = "subsystem_status_error",
        empty_auth_from_discovery = "empty_auth_from_discovery",
        empty_url_from_discovery = "empty_url_from_discovery",
        expired_auth_from_discovery = "expired_auth_from_discovery",
        unknown_signal_service_sign_in_failure = "unknown_signal_service_sign_in_failure",
        xbl_join_lobby_failure = "xbl_join_lobby_failure",
        unspecified_client_instance_disconnection = "unspecified_client_instance_disconnection",
        conn_session_not_found = "conn_session_not_found",
        conn_create_peer_connection = "conn_create_peer_connection",
        conn_ice = "conn_ice",
        conn_connect_request = "conn_connect_request",
        conn_connect_response = "conn_connect_response",
        conn_negotiation_timeout = "conn_negotiation_timeout",
        conn_inactivity_timeout = "conn_inactivity_timeout",
        stale_connection_being_replaced = "stale_connection_being_replaced",
        realms_session_not_found = "realms_session_not_found",
        bad_packet = "bad_packet",
        conn_failed_to_create_offer = "conn_failed_to_create_offer",
        conn_failed_to_create_answer = "conn_failed_to_create_answer",
        conn_failed_to_set_local_description = "conn_failed_to_set_local_description",
        conn_failed_to_set_remote_description = "conn_failed_to_set_remote_description",
        conn_negotiation_timeout_waiting_for_response = "conn_negotiation_timeout_waiting_for_response",
        conn_negotiation_timeout_waiting_for_accept = "conn_negotiation_timeout_waiting_for_accept",
        conn_incoming_connection_ignored = "conn_incoming_connection_ignored",
        conn_signaling_parsing_failure = "conn_signaling_parsing_failure",
        conn_signaling_unknown_error = "conn_signaling_unknown_error",
        conn_signaling_unicast_delivery_failed = "conn_signaling_unicast_delivery_failed",
        conn_signaling_broadcast_delivery_failed = "conn_signaling_broadcast_delivery_failed",
        conn_signaling_generic_delivery_failed = "conn_signaling_generic_delivery_failed",
        editor_mismatch_editor_world = "editor_mismatch_editor_world",
        editor_mismatch_vanilla_world = "editor_mismatch_vanilla_world",
        world_transfer_not_primary_client = "world_transfer_not_primary_client",
        server_shutdown = "server_shutdown",
        game_setup_cancelled = "game_setup_cancelled",
        game_setup_failed = "game_setup_failed",
        no_venue = "no_venue",
        conn_signalling_sign_in_failed = "conn_signalling_sign_in_failed",
        session_access_denied = "session_access_denied",
        service_sign_in_issue = "service_sign_in_issue",
        conn_no_signaling_channel = "conn_no_signaling_channel",
        conn_not_logged_in = "conn_not_logged_in",
        conn_client_signalling_error = "conn_client_signalling_error",
        sub_client_login_disabled = "sub_client_login_disabled",
        deep_link_trying_to_open_demo_world_while_signed_in = "deep_link_trying_to_open_demo_world_while_signed_in",
        async_join_task_denied = "async_join_task_denied",
        realms_timeline_required = "realms_timeline_required",
        guest_withough_host = "guest_withough_host",
        failed_to_join_experience = "failed_to_join_experience"
    }

    export interface FullContainerName {
        container_id: ContainerSlotType;
        dynamic_container_id: number | undefined;
    }

    export enum MovementEffectType {
        GLIDE_BOOST = "GLIDE_BOOST",
        invalid = "invalid"
    }

    /**
     * BiomeDefinition represents a biome definition in the game. This can be a vanilla biome or a completely
     * custom biome.
     */
    export interface BiomeDefinition {
        /** NameIndex represents the index of the biome name in the string list from BiomeDefinitionListPacket. */
        name_index: number;
        biome_id: number | undefined;
        /** Temperature is the temperature of the biome, used for weather, biome behaviours and sky colour. */
        temperature: number;
        /** Downfall is the amount that precipitation affects colours and block changes. */
        downfall: number;
        /** RedSporeDensity is the density of red spore precipitation visuals. */
        red_spore_density: number;
        /** BlueSporeDensity is the density of blue spore precipitation visuals. */
        blue_spore_density: number;
        /** AshDensity is the density of ash precipitation visuals. */
        ash_density: number;
        /** WhiteAshDensity is the density of white ash precipitation visuals. */
        white_ash_density: number;
        /** Depth ... */
        depth: number;
        /** Scale ... */
        scale: number;
        /** MapWaterColour is an ARGB value for the water colour on maps in the biome. */
        map_water_colour: number;
        /** Rain is true if the biome has rain, false if it is a dry biome. */
        rain: boolean;
        tags: any | undefined;
        chunk_generation: BiomeChunkGeneration | undefined;
    }

    /**
     * BiomeChunkGeneration represents the information required for the client to generate chunks itself
     * to create the illusion of a larger render distance.
     */
    export interface BiomeChunkGeneration {
        climate: BiomeClimate | undefined;
        consolidated_features: any | undefined;
        mountain_parameters: BiomeMountainParameters | undefined;
        surface_material_adjustments: any | undefined;
        surface_materials: BiomeSurfaceMaterial | undefined;
        /** HasSwampSurface is true if the biome has a swamp surface. */
        has_swamp_surface: boolean;
        /** HasFrozenOceanSurface is true if the biome has a frozen ocean surface. */
        has_frozen_ocean_surface: boolean;
        /** HasEndSurface is true if the biome has an end surface. */
        has_end_surface: boolean;
        mesa_surface: BiomeMesaSurface | undefined;
        capped_surface: BiomeCappedSurface | undefined;
        overworld_rules: BiomeOverworldRules | undefined;
        multi_noise_rules: BiomeMultiNoiseRules | undefined;
        legacy_rules: any | undefined;
    }

    /**
     * BiomeClimate represents the climate of a biome, mainly for ambience but also defines certain behaviours.
     */
    export interface BiomeClimate {
        /** Temperature is the temperature of the biome, used for weather, biome behaviours and sky colour. */
        temperature: number;
        /** Downfall is the amount that precipitation affects colours and block changes. */
        downfall: number;
        /** RedSporeDensity is the density of red spore precipitation visuals. */
        red_spore_density: number;
        /** BlueSporeDensity is the density of blue spore precipitation visuals. */
        blue_spore_density: number;
        /** AshDensity is the density of ash precipitation visuals. */
        ash_density: number;
        /** WhiteAshDensity is the density of white ash precipitation visuals. */
        white_ash_density: number;
        /** SnowAccumulationMin is the minimum amount of snow that can accumulate in the biome, every 0.125 is another layer of snow. */
        snow_accumulation_min: number;
        /** SnowAccumulationMax is the maximum amount of snow that can accumulate in the biome, every 0.125 is another layer of snow. */
        snow_accumulation_max: number;
    }

    /**
     * BiomeMountainParameters specifies the parameters for a mountain biome.
     */
    export interface BiomeMountainParameters {
        /** SteepBlock is the runtime ID of the block to use for steep slopes. */
        steep_block: number;
        /** NorthSlopes is true if the biome has north slopes. */
        north_slopes: boolean;
        /** SouthSlopes is true if the biome has south slopes. */
        south_slopes: boolean;
        /** WestSlopes is true if the biome has west slopes. */
        west_slopes: boolean;
        /** EastSlopes is true if the biome has east slopes. */
        east_slopes: boolean;
        /** TopSlideEnabled is true if the biome has top slide enabled. */
        top_slide_enabled: boolean;
    }

    /**
     * BiomeSurfaceMaterial specifies the materials to use for the surface layers of the biome.
     */
    export interface BiomeSurfaceMaterial {
        /** TopBlock is the runtime ID of the block to use for the top layer. */
        top_block: number;
        /** MidBlock is the runtime ID to use for the middle layers. */
        mid_block: number;
        /** SeaFloorBlock is the runtime ID to use for the sea floor. */
        sea_floor_block: number;
        /** FoundationBlock is the runtime ID to use for the foundation layers. */
        foundation_block: number;
        /** SeaBlock is the runtime ID to use for the sea layers. */
        sea_block: number;
        /** SeaFloorDepth is the depth of the sea floor, in blocks. */
        sea_floor_depth: number;
    }

    /**
     * BiomeMesaSurface specifies the materials to use for the mesa biome.
     */
    export interface BiomeMesaSurface {
        /** ClayMaterial is the runtime ID of the block to use for clay layers. */
        clay_material: number;
        /** HardClayMaterial is the runtime ID of the block to use for hard clay layers. */
        hard_clay_material: number;
        /** BrycePillars is true if the biome has bryce pillars, which are tall spire-like structures. */
        bryce_pillars: boolean;
        /** HasForest is true if the biome has a forest. */
        has_forest: boolean;
    }

    /**
     * BiomeCappedSurface specifies the materials to use for the capped surface of a biome, such as in the Nether.
     */
    export interface BiomeCappedSurface {
        /** FloorBlocks is a list of runtime IDs to use for the floor blocks. */
        floor_blocks: any;
        /** CeilingBlocks is a list of runtime IDs to use for the ceiling blocks. */
        ceiling_blocks: any;
        sea_block: number | undefined;
        foundation_block: number | undefined;
        beach_block: number | undefined;
    }

    /**
     * BiomeMultiNoiseRules specifies the rules for multi-noise biomes, which are biomes that are defined by
     * multiple noise parameters instead of just temperature and humidity.
     */
    export interface BiomeMultiNoiseRules {
        /** Temperature is the temperature level of the biome. */
        temperature: number;
        /** Humidity is the humidity level of the biome. */
        humidity: number;
        /** Altitude is the altitude level of the biome. */
        altitude: number;
        /** Weirdness is the weirdness level of the biome. */
        weirdness: number;
        /** Weight is the weight of the biome, with a higher weight being more likely to be selected. */
        weight: number;
    }

    /**
     * BiomeWeight defines the weight for a biome, used for weighted randomness.
     */
    export interface BiomeWeight {
        /** Biome is the index of the biome name in the string list. */
        biome: number;
        /** Weight is the weight of the biome, with a higher weight being more likely to be selected. */
        weight: number;
    }

    /**
     * BiomeTemperatureWeight defines the weight for a temperature, used for weighted randomness.
     */
    export interface BiomeTemperatureWeight {
        /** Temperature is the temperature that can be selected. */
        temperature: number;
        /** Weight is the weight of the temperature, with a higher weight being more likely to be selected. */
        weight: number;
    }

    /**
     * BiomeConsolidatedFeature represents a feature that is consolidated into a single feature for the biome.
     */
    export interface BiomeConsolidatedFeature {
        /** Scatter defines how the feature is scattered in the biome. */
        scatter: BiomeScatterParameter;
        /** Feature is the index of the feature's name in the string list. */
        feature: number;
        /** Identifier is the index of the feature's identifier in the string list. */
        identifier: number;
        /** Pass is the index of the feature's pass in the string list. */
        pass: number;
        /** CanUseInternal is true if the feature can use internal features. */
        can_use_internal: boolean;
    }

    export interface BiomeScatterParameter {
        /** Coordinates is a list of coordinate rules to scatter the feature within. */
        coordinates: any;
        /** EvaluationOrder is the order in which the coordinates are evaluated. */
        evaluation_order: any;
        /** ChancePercentType is the type of expression operation to use for the chance percent. */
        chance_percent_type: number;
        /** ChancePercent is the index of the chance expression in the string list. */
        chance_percent: number;
        /** ChanceNumerator is the numerator of the chance expression. */
        chance_numerator: number;
        /** ChanceDenominator is the denominator of the chance expression. */
        chance_denominator: number;
        /** IterationsType is the type of expression operation to use for the iterations. */
        iterations_type: number;
        /** Iterations is the index of the iterations expression in the string list. */
        iterations: number;
    }

    /**
     * BiomeCoordinate specifies coordinate rules for where features can be scattered in the biome.
     */
    export interface BiomeCoordinate {
        /** MinValueType is the type of expression operation to use for the minimum value. */
        min_value_type: number;
        /** MinValue is the index of the minimum value expression in the string list. */
        min_value: number;
        /** MaxValueType is the type of expression operation to use for the maximum value. */
        max_value_type: number;
        /** MaxValue is the index of the maximum value expression in the string list. */
        max_value: number;
        /** GridOffset is the offset of the grid, used for fixed grid and jittered grid distributions. */
        grid_offset: number;
        /** GridStepSize is the step size of the grid, used for fixed grid and jittered grid distributions. */
        grid_step_size: number;
        /** Distribution is the type of distribution to use for the coordinate. */
        distribution: any;
    }

    /**
     * BiomeElementData are set rules to adjust the surface materials of the biome.
     */
    export interface BiomeElementData {
        /** NoiseFrequencyScale is the frequency scale of the noise used to adjust the surface materials. */
        noise_frequency_scale: number;
        /** NoiseLowerBound is the minimum noise value required to be selected. */
        noise_lower_bound: number;
        /** NoiseUpperBound is the maximum noise value required to be selected. */
        noise_upper_bound: number;
        /** HeightMinType is the type of expression operation to use for the minimum height. */
        height_min_type: number;
        /** HeightMin is the index of the minimum height expression in the string list. */
        height_min: number;
        /** HeightMaxType is the type of expression operation to use for the maximum height. */
        height_max_type: number;
        /** HeightMax is the index of the maximum height expression in the string list. */
        height_max: number;
        /** AdjustedMaterials is the materials to use for the surface layers of the biome if selected. */
        adjusted_materials: BiomeSurfaceMaterial;
    }

    /**
     * BiomeOverworldRules specifies a list of transformation rules to apply to different parts of the overworld.
     */
    export interface BiomeOverworldRules {
        /** HillsTransformations is a list of weighted biome transformations to apply to hills. */
        hills_transformations: any;
        /** MutateTransformations is a list of weighted biome transformations to apply to mutated biomes. */
        mutate_transformations: any;
        /** RiverTransformations is a list of weighted biome transformations to apply to rivers. */
        river_transformations: any;
        /** ShoreTransformations is a list of weighted biome transformations to apply to shores. */
        shore_transformations: any;
        /** PreHillsEdgeTransformations is a list of conditional transformations to apply to the edges of hills. */
        pre_hills_edge_transformations: any;
        /** PostShoreEdgeTransformations is a list of conditional transformations to apply to the edges of shores. */
        post_shore_edge_transformations: any;
        /** ClimateTransformations is a list of weighted temperature transformations to apply to the biome's climate. */
        climate_transformations: any;
    }

    /**
     * BiomeConditionalTransformation is the legacy method of transforming biomes.
     */
    export interface BiomeConditionalTransformation {
        /** WeightedBiomes is a list of biomes and their weights. */
        weighted_biomes: any;
        /** ConditionJSON is an index of the condition JSON data in the string list. */
        condition_json: number;
        /** MinPassingNeighbours is the minimum number of neighbours that must pass the condition for the transformation to be applied. */
        min_passing_neighbours: number;
    }

    export interface mcpe_packet {
        name: any;
        params: any;
    }

    export interface packet_login {
        /** Protocol version (Big Endian!) */
        protocol_version: number;
        /** The structure of the login tokens has changed in 1.21.90. The encapsulated data is now a JSON object with a stringified `Certificate`. */
        tokens: any;
    }

    export interface LoginTokens {
        /** JSON array of JWT data: contains the display name, UUID and XUID It should be signed by the Mojang public key For 1.21.90+, the 'identity' field is a Little-Endian length-prefixed JSON-encoded string. This JSON object must contain a 'Certificate' key, whose value is a *stringified* JSON object that holds the actual JWT 'chain' array. */
        identity: LittleString;
        /** JWT containing skin and other client data. */
        client: LittleString;
    }

    export interface packet_play_status {
        status: any;
    }

    export interface packet_server_to_client_handshake {
        /** Contains the salt to complete the Diffie-Hellman key exchange */
        token: string;
    }

    /**
     * Sent by the client in response to a Server To Client Handshake packet
     * sent by the server. It is the first encrypted packet in the login handshake
     * and serves as a confirmation that encryption is correctly initialized client side.
     * It has no fields.
     */
    export interface packet_client_to_server_handshake {
    }

    /**
     * Sent by the server to disconnect a client.
     */
    export interface packet_disconnect {
        /** Reason is the reason for the disconnection. It seems as if this field has no use other than for telemetry reasons as it does not affect the message that gets displayed on the disconnect screen. */
        reason: DisconnectFailReason;
        /** Specifies if the disconnection screen should be hidden when the client is disconnected, meaning it will be sent directly to the main menu. */
        hide_disconnect_reason: boolean;
        undefined: any;
    }

    export interface packet_resource_packs_info {
        /** If the resource pack requires the client accept it. */
        must_accept: boolean;
        /** HasAddons specifies if any of the resource packs contain addons in them. If set to true, only clients that support addons will be able to download them. */
        has_addons: boolean;
        /** If scripting is enabled. */
        has_scripts: boolean;
        /** ForceDisableVibrantVisuals specifies if the vibrant visuals feature should be forcibly disabled on the server. If set to true, the server will ensure that vibrant visuals are not enabled, regardless of the client's settings. */
        disable_vibrant_visuals: boolean;
        world_template: any;
        /** A list of resource packs that the client needs to download before joining the server. The order of these resource packs is not relevant in this packet. It is however important in the Resource Pack Stack packet. */
        texture_packs: TexturePackInfos;
    }

    export interface packet_resource_pack_stack {
        /** If the resource pack must be accepted for the player to join the server. */
        must_accept: boolean;
        /** [inline] */
        behavior_packs: ResourcePackIdVersions;
        /** [inline] */
        resource_packs: ResourcePackIdVersions;
        game_version: string;
        experiments: Experiments;
        experiments_previously_used: boolean;
        has_editor_packs: boolean;
    }

    export interface packet_resource_pack_client_response {
        response_status: any;
        /** All of the pack IDs. */
        resourcepackids: ResourcePackIds;
    }

    /**
     * Sent by the client to the server to send chat messages, and by the server to the client
     * to forward or send messages, which may be chat, popups, tips etc.
     * # https://github.com/pmmp/PocketMine-MP/blob/a43b46a93cb127f037c879b5d8c29cda251dd60c/src/pocketmine/network/mcpe/protocol/TextPacket.php
     * # https://github.com/Sandertv/gophertunnel/blob/05ac3f843dd60d48b9ca0ab275cda8d9e85d8c43/minecraft/protocol/packet/text.go
     */
    export interface packet_text {
        /** TextType is the type of the text sent. When a client sends this to the server, it should always be TextTypeChat. If the server sends it, it may be one of the other text types above. */
        type: any;
        /** NeedsTranslation specifies if any of the messages need to be translated. It seems that where % is found in translatable text types, these are translated regardless of this bool. Translatable text types include TextTypeTip, TextTypePopup and TextTypeJukeboxPopup. */
        needs_translation: boolean;
        undefined: any;
        /** The XUID of the player who sent this message. */
        xuid: string;
        /** PlatformChatID is an identifier only set for particular platforms when chatting (presumably only for Nintendo Switch). It is otherwise an empty string, and is used to decide which players are able to chat with each other. */
        platform_chat_id: string;
        /** FilteredMessage is a filtered version of Message with all the profanity removed. The client will use this over Message if this field is not empty and they have the "Filter Profanity" setting enabled. */
        filtered_message: string;
    }

    /**
     * Sent by the server to update the current time client-side. The client actually advances time
     * client-side by itself, so this packet does not need to be sent each tick. It is merely a means
     * of synchronizing time between server and client.
     */
    export interface packet_set_time {
        /** Time is the current time. The time is not limited to 24000 (time of day), but continues progressing after that. */
        time: number;
    }

    /**
     * Sent by the server to send information about the world the player will be spawned in.
     */
    export interface packet_start_game {
        /** The unique ID of the player. The unique ID is a value that remains consistent across different sessions of the same world, but most unofficial servers simply fill the runtime ID of the entity out for this field. */
        entity_id: number;
        /** The runtime ID of the player. The runtime ID is unique for each world session, and entities are generally identified in packets using this runtime ID. */
        runtime_entity_id: number;
        /** PlayerGameMode is the game mode the player currently has. It is a value from 0-4, with 0 being survival mode, 1 being creative mode, 2 being adventure mode, 3 being survival spectator and 4 being creative spectator. This field may be set to 5 to make the client fall back to the game mode set in the WorldGameMode field. */
        player_gamemode: GameMode;
        /** The spawn position of the player in the world. In servers this is often the same as the world's spawn position found below. */
        player_position: vec3f;
        /** The pitch and yaw of the player */
        rotation: vec2f;
        /** The seed used to generate the world. */
        seed: bigint;
        biome_type: number;
        biome_name: string;
        /** Dimension is the ID of the dimension that the player spawns in. It is a value from 0-2, with 0 being the overworld, 1 being the nether and 2 being the end. */
        dimension: any;
        /** Generator is the generator used for the world. It is a value from 0-4, with 0 being old limited worlds, 1 being infinite worlds, 2 being flat worlds, 3 being nether worlds and 4 being end worlds. A value of 0 will actually make the client stop rendering chunks you send beyond the world limit. As of 1.21.80, protocol.PlayerMovementModeServer is the minimum requirement for MovementType. */
        generator: number;
        /** The world game mode that a player gets when it first spawns in the world. It is shown in the settings and is used if the Player Gamemode is set to 5. */
        world_gamemode: GameMode;
        /** Specifies if the game is locked to "hardcore" mode or not, meaning the world will be unplayable after player dies in survival game mode. Persists even after switching player or world game modes. */
        hardcore: boolean;
        /** Difficulty is the difficulty of the world. It is a value from 0-3, with 0 being peaceful, 1 being easy, 2 being normal and 3 being hard. */
        difficulty: number;
        /** The block on which the world spawn of the world. This coordinate has no effect on the place that the client spawns, but it does have an effect on the direction that a compass poInts. */
        spawn_position: BlockCoordinates;
        /** Defines if achievements are disabled in the world. The client crashes if this value is set to true while the player's or the world's game mode is creative, and it's recommended to simply always set this to false as a server. */
        achievements_disabled: boolean;
        /** EditorWorldType is a value to dictate the type of editor mode, a special mode recently introduced adding "powerful tools for editing worlds, intended for experienced creators." */
        editor_world_type: any;
        /** Whether the world was created in editor mode */
        created_in_editor: boolean;
        /** Whether the world was exported from editor mode */
        exported_from_editor: boolean;
        /** The time at which the day cycle was locked if the day cycle is disabled using the respective game rule. The client will maIntain this time as Boolean as the day cycle is disabled. */
        day_cycle_stop_time: number;
        /** Some Minecraft: Education Edition field that specifies what 'region' the world was from, with 0 being None, 1 being RestOfWorld, and 2 being China. The actual use of this field is unknown. */
        edu_offer: number;
        /** Specifies if the world has education edition features enabled, such as the blocks or entities specific to education edition. */
        edu_features_enabled: boolean;
        edu_product_uuid: string;
        /** The level specifying the Intensity of the rain falling. When set to 0, no rain falls at all. */
        rain_level: number;
        lightning_level: number;
        /** The level specifying the Intensity of the thunder. This may actually be set independently from the rain level, meaning dark clouds can be produced without rain. */
        has_confirmed_platform_locked_content: boolean;
        /** Specifies if the world is a multi-player game. This should always be set to true for servers. */
        is_multiplayer: boolean;
        /** Specifies if LAN broadcast was Intended to be enabled for the world. */
        broadcast_to_lan: boolean;
        /** The mode used to broadcast the joined game across XBOX Live. */
        xbox_live_broadcast_mode: number;
        /** The mode used to broadcast the joined game across the platform. */
        platform_broadcast_mode: number;
        /** If commands are enabled for the player. It is recommended to always set this to true on the server, as setting it to false means the player cannot, under any circumstance, use a command. */
        enable_commands: boolean;
        /** Specifies if the texture pack the world might hold is required, meaning the client was forced to download it before joining. */
        is_texturepacks_required: boolean;
        /** Defines game rules currently active with their respective values. The value of these game rules may be either 'bool', 'Int32' or 'Float32'. Some game rules are server side only, and don't necessarily need to be sent to the client. */
        gamerules: GameRules;
        experiments: Experiments;
        experiments_previously_used: boolean;
        /** Specifies if the world had the bonus map setting enabled when generating it. It does not have any effect client-side. */
        bonus_chest: boolean;
        /** Specifies if the world has the start with map setting enabled, meaning each joining player obtains a map. This should always be set to false, because the client obtains a map all on its own accord if this is set to true. */
        map_enabled: boolean;
        /** The permission level of the player. It is a value from 0-3, with 0 being visitor, 1 being member, 2 being operator and 3 being custom. */
        permission_level: PermissionLevel;
        /** The radius around the player in which chunks are ticked. Most servers set this value to a fixed number, as it does not necessarily affect anything client-side. */
        server_chunk_tick_range: number;
        /** Specifies if the texture pack of the world is locked, meaning it cannot be disabled from the world. This is typically set for worlds on the marketplace that have a dedicated texture pack. */
        has_locked_behavior_pack: boolean;
        /** Specifies if the texture pack of the world is locked, meaning it cannot be disabled from the world. This is typically set for worlds on the marketplace that have a dedicated texture pack. */
        has_locked_resource_pack: boolean;
        /** Specifies if the world from the server was from a locked world template. For servers this should always be set to false. */
        is_from_locked_world_template: boolean;
        msa_gamertags_only: boolean;
        /** Specifies if the world from the server was from a locked world template. For servers this should always be set to false. */
        is_from_world_template: boolean;
        /** Specifies if the world was a template that locks all settings that change properties above in the settings GUI. It is recommended to set this to true for servers that do not allow things such as setting game rules through the GUI. */
        is_world_template_option_locked: boolean;
        /** A hack that Mojang put in place to preserve backwards compatibility with old villagers. The his never actually read though, so it has no functionality. */
        only_spawn_v1_villagers: boolean;
        /** PersonaDisabled is true if persona skins are disabled for the current game session. */
        persona_disabled: boolean;
        /** CustomSkinsDisabled is true if custom skins are disabled for the current game session. */
        custom_skins_disabled: boolean;
        /** EmoteChatMuted specifies if players will be sent a chat message when using certain emotes. */
        emote_chat_muted: boolean;
        /** The version of the game from which Vanilla features will be used. The exact function of this field isn't clear. */
        game_version: string;
        limited_world_width: number;
        limited_world_length: number;
        is_new_nether: boolean;
        edu_resource_uri: EducationSharedResourceURI;
        experimental_gameplay_override: boolean;
        /** ChatRestrictionLevel specifies the level of restriction on in-game chat. */
        chat_restriction_level: any;
        /** DisablePlayerInteractions is true if the client should ignore other players when interacting with the world. */
        disable_player_interactions: boolean;
        server_identifier: string;
        world_identifier: string;
        scenario_identifier: string;
        owner_identifier: string;
        /** A base64 encoded world ID that is used to identify the world. */
        level_id: string;
        /** The name of the world that the player is joining. Note that this field shows up above the player list for the rest of the game session, and cannot be changed. Setting the server name to this field is recommended. */
        world_name: string;
        /** A UUID specific to the premium world template that might have been used to generate the world. Servers should always fill out an empty String for this. */
        premium_world_template_id: string;
        /** Specifies if the world was a trial world, meaning features are limited and there is a time limit on the world. */
        is_trial: boolean;
        /** RewindHistorySize is the amount of history to keep at maximum */
        rewind_history_size: number;
        /** ServerAuthoritativeBlockBreaking specifies if block breaking should be sent through packet.PlayerAuthInput or not. This field is somewhat redundant as it is always enabled if server authoritative movement is enabled. */
        server_authoritative_block_breaking: boolean;
        current_tick: bigint;
        enchantment_seed: number;
        block_properties: BlockProperties;
        multiplayer_correlation_id: string;
        server_authoritative_inventory: boolean;
        engine: string;
        property_data: nbt;
        block_pallette_checksum: bigint;
        world_template_id: uuid;
        client_side_generation: boolean;
        block_network_ids_are_hashes: boolean;
        server_controlled_sound: boolean;
    }

    export interface packet_add_player {
        /** UUID is the UUID of the player. It is the same UUID that the client sent in the Login packet at the start of the session. A player with this UUID must exist in the player list (built up using the Player List packet) for it to show up in-game. */
        uuid: uuid;
        /** Username is the name of the player. This username is the username that will be set as the initial name tag of the player. */
        username: string;
        /** The runtime ID of the player. The runtime ID is unique for each world session, and entities are generally identified in packets using this runtime ID. */
        runtime_id: number;
        /** An identifier only set for particular platforms when chatting (presumably only for Nintendo Switch). It is otherwise an empty string, and is used to decide which players are able to chat with each other. */
        platform_chat_id: string;
        /** Position is the position to spawn the player on. If the player is on a distance that the viewer cannot see it, the player will still show up if the viewer moves closer. */
        position: vec3f;
        /** Velocity is the initial velocity the player spawns with. This velocity will initiate client side movement of the player. */
        velocity: vec3f;
        /** Pitch is the vertical rotation of the player. Facing straight forward yields a pitch of 0. Pitch is measured in degrees. */
        pitch: number;
        /** Yaw is the horizontal rotation of the player. Yaw is also measured in degrees. */
        yaw: number;
        /** HeadYaw is the same as Yaw, except that it applies specifically to the head of the player. A different value for HeadYaw than Yaw means that the player will have its head turned. */
        head_yaw: number;
        /** HeldItem is the item that the player is holding. The item is shown to the viewer as soon as the player itself shows up. Needless to say that this field is rather pointless, as additional packets still must be sent for armour to show up. */
        held_item: Item;
        /** GameType is the game type of the player. If set to GameTypeSpectator, the player will not be shown to viewers. */
        gamemode: GameMode;
        /** EntityMetadata is a map of entity metadata, which includes flags and data properties that alter in particular the way the player looks. Flags include ones such as 'on fire' and 'sprinting'. The metadata values are indexed by their property key. */
        metadata: MetadataDictionary;
        /** EntityProperties holds lists of entity properties that define specific attributes of an entity. As of v1.19.40, the vanilla server does not use these properties, however they are still supported by the protocol. */
        properties: EntityProperties;
        /** The unique ID of the player. The unique ID is a value that remains consistent across different sessions of the same world, but most unoffical servers simply fill the runtime ID of the player out for this field. */
        unique_id: bigint;
        permission_level: PermissionLevel;
        command_permission: CommandPermissionLevel;
        /** AbilityLayer represents the abilities of a specific layer, such as the base layer or the spectator layer. */
        abilities: any;
        /** EntityLinks is a list of entity links that are currently active on the player. These links alter the way the player shows up when first spawned in terms of it shown as riding an entity. Setting these links is important for new viewers to see the player is riding another entity. */
        links: Links;
        /** DeviceID is the device ID set in one of the files found in the storage of the device of the player. It may be changed freely, so it should not be relied on for anything. */
        device_id: string;
        /** BuildPlatform is the build platform/device OS of the player that is about to be added, as it sent in the Login packet when joining. */
        device_os: DeviceOS;
    }

    export interface packet_add_entity {
        /** EntityUniqueID is the unique ID of the entity. The unique ID is a value that remains consistent across different sessions of the same world, but most servers simply fill the runtime ID of the entity out for */
        unique_id: number;
        /** EntityRuntimeID is the runtime ID of the entity. The runtime ID is unique for each world session, and entities are generally identified in packets using this runtime ID. */
        runtime_id: number;
        /** EntityType is the string entity type of the entity, for example 'minecraft:skeleton'. A list of these entities may be found online. */
        entity_type: string;
        /** Position is the position to spawn the entity on. If the entity is on a distance that the player cannot see it, the entity will still show up if the player moves closer. */
        position: vec3f;
        /** Velocity is the initial velocity the entity spawns with. This velocity will initiate client side movement of the entity. */
        velocity: vec3f;
        /** Pitch is the vertical rotation of the entity. Facing straight forward yields a pitch of 0. Pitch is measured in degrees. */
        pitch: number;
        /** Yaw is the horizontal rotation of the entity. Yaw is also measured in degrees. */
        yaw: number;
        /** HeadYaw is the same as Yaw, except that it applies specifically to the head of the entity. A different value for HeadYaw than Yaw means that the entity will have its head turned. */
        head_yaw: number;
        /** BodyYaw is the same as Yaw, except that it applies specifically to the body of the entity. A different value for BodyYaw than HeadYaw means that the entity will have its body turned, although it is unclear what the difference between BodyYaw and Yaw is. */
        body_yaw: number;
        /** Attributes is a slice of attributes that the entity has. It includes attributes such as its health, movement speed, etc. */
        attributes: EntityAttributes;
        /** EntityMetadata is a map of entity metadata, which includes flags and data properties that alter in particular the way the entity looks. Flags include ones such as 'on fire' and 'sprinting'. The metadata values are indexed by their property key. */
        metadata: MetadataDictionary;
        /** EntityProperties holds lists of entity properties that define specific attributes of an entity. As of v1.19.40, the vanilla server does not use these properties, however they are still supported by the protocol. */
        properties: EntityProperties;
        /** EntityLinks is a list of entity links that are currently active on the entity. These links alter the way the entity shows up when first spawned in terms of it shown as riding an entity. Setting these links is important for new viewers to see the entity is riding another entity. */
        links: Links;
    }

    export interface packet_remove_entity {
        entity_id_self: number;
    }

    export interface packet_add_item_entity {
        entity_id_self: number;
        runtime_entity_id: number;
        item: Item;
        position: vec3f;
        velocity: vec3f;
        metadata: MetadataDictionary;
        is_from_fishing: boolean;
    }

    export interface packet_take_item_entity {
        runtime_entity_id: number;
        target: number;
    }

    /**
     * MoveActorAbsolute is sent by the server to move an entity to an absolute position. It is typically used
     * for movements where high accuracy isn't needed, such as for long range teleporting.
     */
    export interface packet_move_entity {
        /** EntityRuntimeID is the runtime ID of the entity. The runtime ID is unique for each world session, and entities are generally identified in packets using this runtime ID. */
        runtime_entity_id: number;
        /** Flags is a combination of flags that specify details of the movement. It is a combination of the flags above. */
        flags: number;
        /** Position is the position to spawn the entity on. If the entity is on a distance that the player cannot see it, the entity will still show up if the player moves closer. */
        position: vec3f;
        /** Rotation is a Vec3 holding the X, Y and Z rotation of the entity after the movement. This is a Vec3 for the reason that projectiles like arrows don't have yaw/pitch, but do have roll. */
        rotation: Rotation;
    }

    /**
     * MovePlayer is sent by players to send their movement to the server, and by the server to update the
     * movement of player entities to other players.
     */
    export interface packet_move_player {
        /** EntityRuntimeID is the runtime ID of the player. The runtime ID is unique for each world session, and entities are generally identified in packets using this runtime ID. */
        runtime_id: number;
        /** Position is the position to spawn the player on. If the player is on a distance that the viewer cannot see it, the player will still show up if the viewer moves closer. */
        position: vec3f;
        /** Pitch is the vertical rotation of the player. Facing straight forward yields a pitch of 0. Pitch is measured in degrees. */
        pitch: number;
        /** Yaw is the horizontal rotation of the player. Yaw is also measured in degrees */
        yaw: number;
        /** HeadYaw is the same as Yaw, except that it applies specifically to the head of the player. A different value for HeadYaw than Yaw means that the player will have its head turned */
        head_yaw: number;
        /** Mode is the mode of the movement. It specifies the way the player's movement should be shown to other players. It is one of the constants below. */
        mode: any;
        /** OnGround specifies if the player is considered on the ground. Note that proxies or hacked clients could fake this to always be true, so it should not be taken for granted. */
        on_ground: boolean;
        /** RiddenEntityRuntimeID is the runtime ID of the entity that the player might currently be riding. If not riding, this should be left 0. */
        ridden_runtime_id: number;
        teleport: any;
        tick: number;
    }

    /**
     * Removed in 1.21.80
     */
    export interface packet_rider_jump {
        jump_strength: number;
    }

    /**
     * UpdateBlock is sent by the server to update a block client-side, without resending the entire chunk that
     * the block is located in. It is particularly useful for small modifications like block breaking/placing.
     */
    export interface packet_update_block {
        /** Position is the block position at which a block is updated. */
        position: BlockCoordinates;
        /** NewBlockRuntimeID is the runtime ID of the block that is placed at Position after sending the packet to the client. */
        block_runtime_id: number;
        /** Flags is a combination of flags that specify the way the block is updated client-side. It is a combination of the flags above, but typically sending only the BlockUpdateNetwork flag is sufficient. */
        flags: UpdateBlockFlags;
        /** Layer is the world layer on which the block is updated. For most blocks, this is the first layer, as that layer is the default layer to place blocks on, but for blocks inside of each other, this differs. */
        layer: number;
    }

    export type UpdateBlockFlags = any; // TODO: Implement type: bitflags

    export interface packet_add_painting {
        entity_id_self: number;
        runtime_entity_id: number;
        coordinates: vec3f;
        direction: number;
        title: string;
    }

    /**
     * TickSync is sent by the client and the server to maintain a synchronized, server-authoritative tick between
     * the client and the server. The client sends this packet first, and the server should reply with another one
     * of these packets, including the response time.
     */
    export interface packet_tick_sync {
        /** ClientRequestTimestamp is the timestamp on which the client sent this packet to the server. The server should fill out that same value when replying. The ClientRequestTimestamp is always 0 */
        request_time: bigint;
        /** ServerReceptionTimestamp is the timestamp on which the server received the packet sent by the client. When the packet is sent by the client, this value is 0. ServerReceptionTimestamp is generally the current tick of the server. It isn't an actual timestamp, as the field implies */
        response_time: bigint;
    }

    export interface packet_level_sound_event_old {
        sound_id: number;
        position: vec3f;
        block_id: number;
        entity_type: number;
        is_baby_mob: boolean;
        is_global: boolean;
    }

    export interface packet_level_event {
        event: any;
        position: vec3f;
        data: number;
    }

    export interface packet_block_event {
        /** Position is the position of the block that an event occurred at. */
        position: BlockCoordinates;
        /** EventType is the type of the block event. The event type decides the way the event data that follows is used */
        type: any;
        /** EventData holds event type specific data. For chests for example, opening the chest means the data must be 1 */
        data: number;
    }

    export interface packet_entity_event {
        runtime_entity_id: number;
        event_id: any;
        data: number;
    }

    export interface packet_mob_effect {
        runtime_entity_id: number;
        event_id: any;
        effect_id: number;
        amplifier: number;
        particles: boolean;
        duration: number;
        tick: number;
    }

    export interface packet_update_attributes {
        runtime_entity_id: number;
        attributes: PlayerAttributes;
        tick: number;
    }

    /**
     * InventoryTransaction is a packet sent by the client. It essentially exists out of multiple sub-packets,
     * each of which have something to do with the inventory in one way or another. Some of these sub-packets
     * directly relate to the inventory, others relate to interaction with the world, that could potentially
     * result in a change in the inventory.
     */
    export interface packet_inventory_transaction {
        transaction: Transaction;
    }

    export interface packet_mob_equipment {
        runtime_entity_id: number;
        item: Item;
        slot: number;
        selected_slot: number;
        window_id: WindowID;
    }

    export interface packet_mob_armor_equipment {
        runtime_entity_id: number;
        helmet: Item;
        chestplate: Item;
        leggings: Item;
        boots: Item;
        body: Item;
    }

    /**
     * Interact is sent by the client when it interacts with another entity in some way. It used to be used for
     * normal entity and block interaction, but this is no longer the case now.
     */
    export interface packet_interact {
        /** Action type is the ID of the action that was executed by the player. It is one of the constants that may be found above. */
        action_id: any;
        /** TargetEntityRuntimeID is the runtime ID of the entity that the player interacted with. This is empty for the InteractActionOpenInventory action type. */
        target_entity_id: number;
        /** Position associated with the ActionType above. For the InteractActionMouseOverEntity, this is the position relative to the entity moused over over which the player hovered with its mouse/touch. For the InteractActionLeaveVehicle, this is the position that the player spawns at after leaving the vehicle. */
        position: any;
    }

    export interface packet_block_pick_request {
        x: number;
        y: number;
        z: number;
        add_user_data: boolean;
        selected_slot: number;
    }

    export interface packet_entity_pick_request {
        runtime_entity_id: bigint;
        selected_slot: number;
        /** WithData is true if the pick request requests the entity metadata. */
        with_data: boolean;
    }

    /**
     * PlayerAction is sent by the client when it executes any action, for example starting to sprint, swim,
     * starting the breaking of a block, dropping an item, etc.
     */
    export interface packet_player_action {
        /** EntityRuntimeID is the runtime ID of the player. The runtime ID is unique for each world session, and entities are generally identified in packets using this runtime ID. */
        runtime_entity_id: number;
        /** ActionType is the ID of the action that was executed by the player. It is one of the constants that may be found above. */
        action: Action;
        /** BlockPosition is the position of the target block, if the action with the ActionType set concerned a block. If that is not the case, the block position will be zero. */
        position: BlockCoordinates;
        /** ResultPosition is the position of the action's result. When a UseItemOn action is sent, this is the position of the block clicked, but when a block is placed, this is the position at which the block will be placed. */
        result_position: BlockCoordinates;
        /** BlockFace is the face of the target block that was touched. If the action with the ActionType set concerned a block. If not, the face is always 0. */
        face: number;
    }

    export interface packet_hurt_armor {
        cause: number;
        damage: number;
        armor_slots: number;
    }

    export interface packet_set_entity_data {
        runtime_entity_id: number;
        metadata: MetadataDictionary;
        /** EntityProperties holds lists of entity properties that define specific attributes of an entity. As of v1.19.40, the vanilla server does not use these properties, however they are still supported by the protocol. */
        properties: EntityProperties;
        tick: number;
    }

    /**
     * SetActorMotion is sent by the server to change the client-side velocity of an entity. It is usually used
     * in combination with server-side movement calculation.
     */
    export interface packet_set_entity_motion {
        /** EntityRuntimeID is the runtime ID of the entity. The runtime ID is unique for each world session, and entities are generally identified in packets using this runtime ID. */
        runtime_entity_id: number;
        /** Velocity is the new velocity the entity gets. This velocity will initiate the client-side movement of the entity. */
        velocity: vec3f;
        tick: number;
    }

    /**
     * SetActorLink is sent by the server to initiate an entity link client-side, meaning one entity will start
     * riding another.
     */
    export interface packet_set_entity_link {
        link: Link;
    }

    export interface packet_set_health {
        health: number;
    }

    export interface packet_set_spawn_position {
        spawn_type: any;
        player_position: BlockCoordinates;
        dimension: number;
        world_position: BlockCoordinates;
    }

    export interface packet_animate {
        action_id: any;
        runtime_entity_id: number;
        undefined: any;
    }

    export interface packet_respawn {
        position: vec3f;
        state: number;
        runtime_entity_id: number;
    }

    /**
     * ContainerOpen is sent by the server to open a container client-side. This container must be physically
     * present in the world, for the packet to have any effect. Unlike Java Edition, Bedrock Edition requires that
     * chests for example must be present and in range to open its inventory.
     */
    export interface packet_container_open {
        /** WindowID is the ID representing the window that is being opened. It may be used later to close the container using a ContainerClose packet. */
        window_id: WindowID;
        /** ContainerType is the type ID of the container that is being opened when opening the container at the position of the packet. It depends on the block/entity, and could, for example, be the window type of a chest or a hopper, but also a horse inventory. */
        window_type: WindowType;
        /** ContainerPosition is the position of the container opened. The position must point to a block entity that actually has a container. If that is not the case, the window will not be opened and the packet will be ignored, if a valid ContainerEntityUniqueID has not also been provided. */
        coordinates: BlockCoordinates;
        /** ContainerEntityUniqueID is the unique ID of the entity container that was opened. It is only used if the ContainerType is one that points to an entity, for example a horse. */
        runtime_entity_id: number;
    }

    /**
     * ContainerClose is sent by the server to close a container the player currently has opened, which was opened
     * using the ContainerOpen packet, or by the client to tell the server it closed a particular container, such
     * as the crafting grid.
     */
    export interface packet_container_close {
        /** WindowID is the ID representing the window of the container that should be closed. It must be equal to the one sent in the ContainerOpen packet to close the designated window. */
        window_id: WindowID;
        /** ContainerType is the type ID of the container that is being opened when opening the container at the position of the packet. It depends on the block/entity, and could, for example, be the window type of a chest or a hopper, but also a horse inventory. */
        window_type: WindowType;
        /** ServerSide determines whether or not the container was force-closed by the server. If this value is not set correctly, the client may ignore the packet and respond with a PacketViolationWarning. */
        server: boolean;
    }

    /**
     * PlayerHotBar is sent by the server to the client. It used to be used to link hot bar slots of the player to
     * actual slots in the inventory, but as of 1.2, this was changed and hot bar slots are no longer a free
     * floating part of the inventory.
     * Since 1.2, the packet has been re-purposed, but its new functionality is not clear.
     */
    export interface packet_player_hotbar {
        selected_slot: number;
        window_id: WindowID;
        select_slot: boolean;
    }

    /**
     * InventoryContent is sent by the server to update the full content of a particular inventory. It is usually
     * sent for the main inventory of the player, but also works for other inventories that are currently opened
     * by the player.
     */
    export interface packet_inventory_content {
        /** WindowID is the ID that identifies one of the windows that the client currently has opened, or one of the consistent windows such as the main inventory. */
        window_id: WindowIDVarint;
        /** Content is the new content of the inventory. The length of this slice must be equal to the full size of the inventory window updated. */
        input: ItemStacks;
        /** Container is the protocol.FullContainerName that describes the container that the content is for. */
        container: FullContainerName;
        /** storage_item is the item that is acting as the storage container for the inventory. If the inventory is not a dynamic container then this field should be left empty. When set, only the item type is used by the client and none of the other stack info. */
        storage_item: Item;
    }

    /**
     * InventorySlot is sent by the server to update a single slot in one of the inventory windows that the client
     * currently has opened. Usually this is the main inventory, but it may also be the off hand or, for example,
     * a chest inventory.
     */
    export interface packet_inventory_slot {
        /** WindowID is the ID of the window that the packet modifies. It must point to one of the windows that the client currently has opened. */
        window_id: WindowIDVarint;
        /** Slot is the index of the slot that the packet modifies. The new item will be set to the slot at this index. */
        slot: number;
        /** Container is the protocol.FullContainerName that describes the container that the content is for. */
        container: FullContainerName;
        /** storage_item is the item that is acting as the storage container for the inventory. If the inventory is not a dynamic container then this field should be left empty. When set, only the item type is used by the client and none of the other stack info. */
        storage_item: Item;
        /** NewItem is the item to be put in the slot at Slot. It will overwrite any item that may currently be present in that slot. */
        item: Item;
    }

    /**
     * ContainerSetData is sent by the server to update specific data of a single container, meaning a block such
     * as a furnace or a brewing stand. This data is usually used by the client to display certain features
     * client-side.
     */
    export interface packet_container_set_data {
        /** WindowID is the ID of the window that should have its data set. The player must have a window open with the window ID passed, or nothing will happen. */
        window_id: WindowID;
        /** Key is the key of the property. It is one of the constants that can be found above. Multiple properties share the same key, but the functionality depends on the type of the container that the data is set to. IF FURNACE: 0: furnace_tick_count 1: furnace_lit_time 2: furnace_lit_duration 3: furnace_stored_xp 4: furnace_fuel_aux IF BREWING STAND: 0: brew_time 1: brew_fuel_amount 2: brew_fuel_total */
        property: number;
        /** Value is the value of the property. Its use differs per property. */
        value: number;
    }

    export interface packet_crafting_data {
        recipes: Recipes;
        /** PotionContainerChangeRecipes is a list of all recipes to convert a potion from one type to another, such as from a drinkable potion to a splash potion, or from a splash potion to a lingering potion. */
        potion_type_recipes: PotionTypeRecipes;
        potion_container_recipes: PotionContainerChangeRecipes;
        /** MaterialReducers is a list of all material reducers which is used in education edition chemistry. */
        material_reducers: any;
        /** ClearRecipes indicates if all recipes currently active on the client should be cleaned. Doing this means that the client will have no recipes active by itself: Any CraftingData packets previously sent will also be discarded, and only the recipes in this CraftingData packet will be used. */
        clear_recipes: boolean;
    }

    /**
     * CraftingEvent is sent by the client when it crafts a particular item. Note that this packet may be fully
     * ignored, as the InventoryTransaction packet provides all the information required.
     */
    export interface packet_crafting_event {
        /** WindowID is the ID representing the window that the player crafted in. */
        window_id: WindowID;
        /** CraftingType is a type that indicates the way the crafting was done, for example if a crafting table was used. */
        recipe_type: any;
        /** RecipeUUID is the UUID of the recipe that was crafted. It points to the UUID of the recipe that was sent earlier in the CraftingData packet. */
        recipe_id: uuid;
        /** Input is a list of items that the player put into the recipe so that it could create the Output items. These items are consumed in the process. */
        input: any;
        /** Output is a list of items that were obtained as a result of crafting the recipe. */
        result: any;
    }

    /**
     * GUIDataPickItem is sent by the server to make the client 'select' a hot bar slot. It currently appears to
     * be broken however, and does not actually set the selected slot to the hot bar slot set in the packet.
     */
    export interface packet_gui_data_pick_item {
        /** ItemName is the name of the item that shows up in the top part of the popup that shows up when selecting an item. It is shown as if an item was selected by the player itself. */
        item_name: string;
        /** ItemEffects is the line under the ItemName, where the effects of the item are usually situated. */
        item_effects: string;
        /** HotBarSlot is the hot bar slot to be selected/picked. This does not currently work, so it does not matter what number this is. */
        hotbar_slot: number;
    }

    /**
     * AdventureSettings is sent by the server to update game-play related features, in particular permissions to
     * access these features for the client. It includes allowing the player to fly, build and mine, and attack
     * entities. Most of these flags should be checked server-side instead of using this packet only.
     * The client may also send this packet to the server when it updates one of these settings through the
     * in-game settings interface. The server should verify if the player actually has permission to update those
     * settings.
     */
    export interface packet_adventure_settings {
        /** Flags is a set of flags that specify certain properties of the player, such as whether or not it can fly and/or move through blocks. It is one of the AdventureFlag constants above. */
        flags: AdventureFlags;
        /** CommandPermissionLevel is a permission level that specifies the kind of commands that the player is allowed to use. */
        command_permission: CommandPermissionLevelVarint;
        /** ActionPermissions is, much like Flags, a set of flags that specify actions that the player is allowed to undertake, such as whether it is allowed to edit blocks, open doors etc. It is a combination of the ActionPermission constants above. */
        action_permissions: ActionPermissions;
        /** PermissionLevel is the permission level of the player as it shows up in the player list built up using the PlayerList packet. It is one of the PermissionLevel constants above. */
        permission_level: PermissionLevel;
        /** Custom permissions */
        custom_stored_permissions: number;
        /** PlayerUniqueID is a unique identifier of the player. It appears it is not required to fill this field out with a correct value. Simply writing 0 seems to work. */
        user_id: bigint;
    }

    export type AdventureFlags = any; // TODO: Implement type: bitflags

    export type ActionPermissions = any; // TODO: Implement type: bitflags

    export interface packet_block_entity_data {
        position: BlockCoordinates;
        nbt: nbt;
    }

    /**
     * Removed in 1.21.80
     */
    export interface packet_player_input {
        motion_x: number;
        motion_z: number;
        jumping: boolean;
        sneaking: boolean;
    }

    /**
     * LevelChunk is sent by the server to provide the client with a chunk of a world data (16xYx16 blocks).
     * Typically a certain amount of chunks is sent to the client before sending it the spawn PlayStatus packet,
     * so that the client spawns in a loaded world.
     */
    export interface packet_level_chunk {
        /** ChunkX is the X coordinate of the chunk sent. (To translate a block's X to a chunk's X: x >> 4) */
        x: number;
        /** ChunkZ is the Z coordinate of the chunk sent. (To translate a block's Z to a chunk's Z: z >> 4) */
        z: number;
        dimension: number;
        /** SubChunkCount is the amount of sub chunks that are part of the chunk sent. Depending on if the cache is enabled, a list of blob hashes will be sent, or, if disabled, the sub chunk data. On newer versions, if this is a negative value it indicates to use the Subchunk Polling mechanism */
        sub_chunk_count: number;
        /** HighestSubChunk is the highest sub-chunk at the position that is not all air. It is only set if the RequestMode is set to protocol.SubChunkRequestModeLimited. */
        highest_subchunk_count: any;
        /** CacheEnabled specifies if the client blob cache should be enabled. This system is based on hashes of blobs which are consistent and saved by the client in combination with that blob, so that the server does not have to send the same chunk multiple times. If the client does not yet have a blob with the hash sent, it will send a ClientCacheBlobStatus packet containing the hashes is does not have the data of. */
        cache_enabled: boolean;
        blobs: any;
        /** RawPayload is a serialised string of chunk data. The data held depends on if CacheEnabled is set to true. If set to false, the payload is composed of multiple sub-chunks, each of which carry a version which indicates the way they are serialised, followed by biomes, border blocks and tile entities. If CacheEnabled is true, the payload consists out of the border blocks and tile entities only. */
        payload: Buffer;
    }

    export interface packet_set_commands_enabled {
        enabled: boolean;
    }

    export interface packet_set_difficulty {
        difficulty: number;
    }

    export interface packet_change_dimension {
        dimension: number;
        position: vec3f;
        respawn: boolean;
        loading_screen_id: number | undefined;
    }

    /**
     * SetPlayerGameType is sent by the server to update the game type (game mode) of the player
     */
    export interface packet_set_player_game_type {
        /** The new gamemode for the player. Some of these game types require additional flags to be set in an AdventureSettings packet for the game mode to obtain its full functionality. # Note: this is actually encoded 64-bit varint, but realistically won't exceed a few bits */
        gamemode: GameMode;
    }

    export interface packet_player_list {
        records: PlayerRecords;
    }

    export interface packet_simple_event {
        event_type: any;
    }

    /**
     * Event is sent by the server to send an event with additional data. It is typically sent to the client for
     * telemetry reasons, much like the SimpleEvent packet.
     */
    export interface packet_event {
        runtime_id: number;
        event_type: any;
        use_player_id: number;
        event_data: restBuffer;
    }

    export interface packet_spawn_experience_orb {
        position: vec3f;
        count: number;
    }

    export type UpdateMapFlags = any; // TODO: Implement type: bitflags

    /**
     * ClientBoundMapItemData is sent by the server to the client to update the data of a map shown to the client.
     * It is sent with a combination of flags that specify what data is updated.
     * The ClientBoundMapItemData packet may be used to update specific parts of the map only. It is not required
     * to send the entire map each time when updating one part.
     */
    export interface packet_clientbound_map_item_data {
        /** MapID is the unique identifier that represents the map that is updated over network. It remains consistent across sessions. */
        map_id: number;
        /** UpdateFlags is a combination of flags found above that indicate what parts of the map should be updated client-side. */
        update_flags: UpdateMapFlags;
        /** Dimension is the dimension of the map that should be updated, for example the overworld (0), the nether (1) or the end (2). */
        dimension: number;
        /** LockedMap specifies if the map that was updated was a locked map, which may be done using a cartography table. */
        locked: boolean;
        /** Origin is the center position of the map being updated. */
        origin: vec3i;
        /** The following fields apply only for the MapUpdateFlagInitialisation. MapsIncludedIn holds an array of map IDs that the map updated is included in. This has to do with the scale of the map: Each map holds its own map ID and all map IDs of maps that include this map and have a bigger scale. This means that a scale 0 map will have 5 map IDs in this slice, whereas a scale 4 map will have only 1 (its own). The actual use of this field remains unknown. */
        included_in: any;
        /** Scale is the scale of the map as it is shown in-game. It is written when any of the MapUpdateFlags are set to the UpdateFlags field. */
        scale: any;
        /** The following fields apply only for the MapUpdateFlagDecoration. TrackedObjects is a list of tracked objects on the map, which may either be entities or blocks. The client makes sure these tracked objects are actually tracked. (position updated etc.) */
        tracked: any;
        /** Updates to the map contents itself (texture) */
        texture: any;
    }

    export interface packet_map_info_request {
        map_id: number;
        /** ClientPixels is a map of pixels sent from the client to notify the server about the pixels that it isn't aware of. */
        client_pixels: any;
    }

    /**
     * RequestChunkRadius is sent by the client to the server to update the server on the chunk view radius that
     * it has set in the settings. The server may respond with a ChunkRadiusUpdated packet with either the chunk
     * radius requested, or a different chunk radius if the server chooses so.
     */
    export interface packet_request_chunk_radius {
        /** ChunkRadius is the requested chunk radius. This value is always the value set in the settings of the player. */
        chunk_radius: number;
        max_radius: number;
    }

    /**
     * ChunkRadiusUpdated is sent by the server in response to a RequestChunkRadius packet. It defines the chunk
     * radius that the server allows the client to have. This may be lower than the chunk radius requested by the
     * client in the RequestChunkRadius packet.
     */
    export interface packet_chunk_radius_update {
        /** ChunkRadius is the final chunk radius that the client will adapt when it receives the packet. It does not have to be the same as the requested chunk radius. */
        chunk_radius: number;
    }

    export interface packet_game_rules_changed {
        rules: GameRules;
    }

    /**
     * Camera is sent by the server to use an Education Edition camera on a player. It produces an image
     * client-side.
     */
    export interface packet_camera {
        /** CameraEntityUniqueID is the unique ID of the camera entity from which the picture was taken. */
        camera_entity_unique_id: number;
        /** TargetPlayerUniqueID is the unique ID of the target player. The unique ID is a value that remains consistent across different sessions of the same world, but most servers simply fill the runtime ID of the player out for this field. */
        target_player_unique_id: number;
    }

    export interface packet_boss_event {
        boss_entity_id: number;
        type: any;
        undefined: any;
    }

    export interface packet_show_credits {
        runtime_entity_id: number;
        status: number;
    }

    /**
     * This packet sends a list of commands to the client. Commands can have
     * arguments, and some of those arguments can have 'enum' values, which are a list of possible
     * values for the argument. The serialization is rather complex and involves palettes like chunks.
     * # In bedrock-protocol, listen to on('client.commands') for a simpler representation
     */
    export interface packet_available_commands {
        /** The length of the enums for all the command parameters in this packet */
        values_len: number;
        /** Not read from stream: instead calculated from the `values_len` field  If the values_len < 0xff => byte, If the values_len < 0xffff => short, If the values_len < 0xffffff => int */
        _enum_type: any;
        /** Here all the enum values for all of the possible commands are stored to one array palette */
        enum_values: any;
        /** chained_subcommand_values is a slice of all chained subcommand names. chained_subcommand_values generally should contain each possible value only once. chained_subcommands are built by pointing to entries in this slice. */
        chained_subcommand_values: any;
        /** Integer parameters may sometimes have a prefix, such as the XP command: /xp <amount: int> [player: target] <- here, the xp command gives experience points /xp <amount: int>L [player: target] <- here, the xp command gives experience levels This is the palette of suffixes */
        suffixes: any;
        /** The list of enum objects */
        enums: any;
        /** chained_subcommands is a slice of all subcommands that are followed by a chained command. An example usage of this is /execute which allows you to run another command as another entity or at a different position etc. */
        chained_subcommands: any;
        command_data: any;
        /** There are two types of enums: static enums which cannot be changed after sending AvaliableCommands, (unless you resend the whole packet) and 'soft' or 'dynamic' enums like below which is an array that can be updated with the UpdateSoftEnum packet */
        dynamic_enums: any;
        enum_constraints: any;
    }

    export type CommandFlags = any; // TODO: Implement type: bitfield

    /**
     * CommandRequest is sent by the client to request the execution of a server-side command. Although some
     * servers support sending commands using the Text packet, this packet is guaranteed to have the correct
     * result.
     */
    export interface packet_command_request {
        /** CommandLine is the raw entered command line. The client does no parsing of the command line by itself (unlike it did in the early stages), but lets the server do that. */
        command: string;
        /** Origin holds information about the command sender that will be returnd back in the command response */
        origin: CommandOrigin;
        /** Internal specifies if the command request internal. Setting it to false seems to work and the usage of this field is not known. */
        internal: boolean;
        /** Specifies the version of the command to run, relative to the current Minecraft version. Should be set to 52 as of 1.19.62 */
        version: number;
    }

    /**
     * CommandBlockUpdate is sent by the client to update a command block at a specific position. The command
     * block may be either a physical block or an entity.
     */
    export interface packet_command_block_update {
        /** Block specifies if the command block updated was an actual physical block. If false, the command block is in a minecart and has an entity runtime ID instead. */
        is_block: boolean;
        undefined: any;
        /** Command is the command currently entered in the command block. This is the command that is executed when the command block is activated. */
        command: string;
        /** LastOutput is the output of the last command executed by the command block. It may be left empty to show simply no output at all, in combination with setting ShouldTrackOutput to false. */
        last_output: string;
        /** Name is the name of the command block updated. If not empty, it will show this name hovering above the command block when hovering over the block with the cursor. */
        name: string;
        /** FilteredName is a filtered version of Name with all the profanity removed. The client will use this over Name if this field is not empty and they have the "Filter Profanity" setting enabled. */
        filtered_name: string;
        /** ShouldTrackOutput specifies if the command block tracks output. If set to false, the output box won't be shown within the command block. */
        should_track_output: boolean;
        /** TickDelay is the delay in ticks between executions of a command block, if it is a repeating command block. */
        tick_delay: number;
        /** ExecuteOnFirstTick specifies if the command block should execute on the first tick, AKA as soon as the command block is enabled. */
        execute_on_first_tick: boolean;
    }

    export interface packet_command_output {
        /** CommandOrigin is the data specifying the origin of the command. In other words, the source that the command request was from, such as the player itself or a websocket server. The client forwards the messages in this packet to the right origin, depending on what is sent here. */
        origin: CommandOrigin;
        /** OutputType specifies the type of output that is sent. */
        output_type: any;
        /** SuccessCount is the amount of times that a command was executed successfully as a result of the command that was requested. For servers, this is usually a rather meaningless fields, but for vanilla, this is applicable for commands created with Functions. */
        success_count: number;
        /** OutputMessages is a list of all output messages that should be sent to the player. Whether they are shown or not, depends on the type of the messages. */
        output: any;
        data_set: any;
    }

    /**
     * UpdateTrade is sent by the server to update the trades offered by a villager to a player. It is sent at the
     * moment that a player interacts with a villager.
     */
    export interface packet_update_trade {
        /** WindowID is the ID that identifies the trading window that the client currently has opened. */
        window_id: WindowID;
        /** WindowType is an identifier specifying the type of the window opened. In vanilla, it appears this is always filled out with 15. */
        window_type: WindowType;
        /** Size is the amount of trading options that the villager has. */
        size: number;
        /** TradeTier is the tier of the villager that the player is trading with. The tier starts at 0 with a first two offers being available, after which two additional offers are unlocked each time the tier becomes one higher. */
        trade_tier: number;
        /** VillagerUniqueID is the unique ID of the villager entity that the player is trading with. The TradeTier sent above applies to this villager. */
        villager_unique_id: number;
        /** EntityUniqueID is the unique ID of the entity (usually a player) for which the trades are updated. The updated trades may apply only to this entity. */
        entity_unique_id: number;
        /** DisplayName is the name displayed at the top of the trading UI. It is usually used to represent the profession of the villager in the UI. */
        display_name: string;
        /** NewTradeUI specifies if the villager should be using the new trade UI (The one added in 1.11.) rather than the old one. This should usually be set to true. */
        new_trading_ui: boolean;
        /** Trading based on Minecraft economy - specifies if the prices of the villager's offers are modified by an increase in demand for the item. (A mechanic added in 1.11.) Buying more of the same item will increase the price of that particular item. https://minecraft.wiki/w/Trading#Economics */
        economic_trades: boolean;
        /** NBT serialised compound of offers that the villager has. */
        offers: nbt;
    }

    /**
     * UpdateEquip is sent by the server to the client upon opening a horse inventory. It is used to set the
     * content of the inventory and specify additional properties, such as the items that are allowed to be put
     * in slots of the inventory.
     */
    export interface packet_update_equipment {
        /** WindowID is the identifier associated with the window that the UpdateEquip packet concerns. It is the ID sent for the horse inventory that was opened before this packet was sent. */
        window_id: WindowID;
        /** WindowType is the type of the window that was opened. Generally, this is the type of a horse inventory, as the packet is specifically made for that. */
        window_type: WindowType;
        /** Size is the size of the horse inventory that should be opened. A bigger size does, in fact, change the amount of slots displayed. */
        size: number;
        /** EntityUniqueID is the unique ID of the entity whose equipment was 'updated' to the player. It is typically the horse entity that had its inventory opened. */
        entity_id: number;
        /** `inventory` is a network NBT serialised compound holding the content of the inventory of the entity (the equipment) and additional data such as the allowed items for a particular slot, used to make sure only saddles can be put in the saddle slot etc. */
        inventory: nbt;
    }

    /**
     * ResourcePackDataInfo is sent by the server to the client to inform the client about the data contained in
     * one of the resource packs that are about to be sent.
     */
    export interface packet_resource_pack_data_info {
        /** UUID is the unique ID of the resource pack that the info concerns. */
        pack_id: string;
        /** DataChunkSize is the maximum size in bytes of the chunks in which the total size of the resource pack to be sent will be divided. A size of 1MB (1024*1024) means that a resource pack of 15.5MB will be split into 16 data chunks. */
        max_chunk_size: number;
        /** ChunkCount is the total amount of data chunks that the sent resource pack will exist out of. It is the total size of the resource pack divided by the DataChunkSize field. The client doesn't actually seem to use this field. Rather, it divides the size by the chunk size to calculate it itself. */
        chunk_count: number;
        /** Size is the total size in bytes that the resource pack occupies. This is the size of the compressed archive (zip) of the resource pack. */
        size: bigint;
        /** Hash is a SHA256 hash of the content of the resource pack. */
        hash: Buffer;
        /** Premium specifies if the resource pack was a premium resource pack, meaning it was bought from the Minecraft store. */
        is_premium: boolean;
        /** PackType is the type of the resource pack. It is one of the resource pack types listed. */
        pack_type: any;
    }

    /**
     * ResourcePackChunkData is sent to the client so that the client can download the resource pack. Each packet
     * holds a chunk of the compressed resource pack, of which the size is defined in the ResourcePackDataInfo
     * packet sent before.
     */
    export interface packet_resource_pack_chunk_data {
        /** UUID is the unique ID of the resource pack that the chunk of data is taken out of. */
        pack_id: string;
        /** ChunkIndex is the current chunk index of the chunk. It is a number that starts at 0 and is incremented for each resource pack data chunk sent to the client. */
        chunk_index: number;
        /** DataOffset is the current progress in bytes or offset in the data that the resource pack data chunk is taken from. */
        progress: bigint;
        /** RawPayload is a byte slice containing a chunk of data from the resource pack. It must be of the same size or less than the DataChunkSize set in the ResourcePackDataInfo packet. */
        payload: Buffer;
    }

    /**
     * ResourcePackChunkRequest is sent by the client to request a chunk of data from a particular resource pack,
     * that it has obtained information about in a ResourcePackDataInfo packet.
     */
    export interface packet_resource_pack_chunk_request {
        /** UUID is the unique ID of the resource pack that the chunk of data is requested from. */
        pack_id: string;
        /** ChunkIndex is the requested chunk index of the chunk. It is a number that starts at 0 and is incremented for each resource pack data chunk requested. */
        chunk_index: number;
    }

    export interface packet_transfer {
        server_address: string;
        port: number;
        reload_world: boolean;
    }

    export interface packet_play_sound {
        name: string;
        coordinates: BlockCoordinates;
        volume: number;
        pitch: number;
    }

    export interface packet_stop_sound {
        name: string;
        stop_all: boolean;
        stop_music_legacy: boolean;
    }

    /**
     * SetTitle is sent by the server to make a title, subtitle or action bar shown to a player. It has several
     * fields that allow setting the duration of the titles.
     */
    export interface packet_set_title {
        /** ActionType is the type of the action that should be executed upon the title of a player. It is one of the constants above and specifies the response of the client to the packet. */
        type: any;
        /** Text is the text of the title, which has a different meaning depending on the ActionType that the packet has. The text is the text of a title, subtitle or action bar, depending on the type set. */
        text: string;
        /** FadeInDuration is the duration that the title takes to fade in on the screen of the player. It is measured in 20ths of a second (AKA in ticks). */
        fade_in_time: number;
        /** RemainDuration is the duration that the title remains on the screen of the player. It is measured in 20ths of a second (AKA in ticks). */
        stay_time: number;
        /** FadeOutDuration is the duration that the title takes to fade out of the screen of the player. It is measured in 20ths of a second (AKA in ticks). */
        fade_out_time: number;
        /** XUID is the XBOX Live user ID of the player, which will remain consistent as long as the player is logged in with the XBOX Live account. It is empty if the user is not logged into its XBL account. */
        xuid: string;
        /** PlatformOnlineID is either a uint64 or an empty string. */
        platform_online_id: string;
        /** FilteredMessage is a filtered version of Message with all the profanity removed. The client will use this over Message if this field is not empty and they have the "Filter Profanity" setting enabled. */
        filtered_message: string;
    }

    export interface packet_add_behavior_tree {
        behaviortree: string;
    }

    /**
     * StructureBlockUpdate is sent by the client when it updates a structure block using the in-game UI. The
     * data it contains depends on the type of structure block that it is. In Minecraft Bedrock Edition v1.11,
     * there is only the Export structure block type, but in v1.13 the ones present in Java Edition will,
     * according to the wiki, be added too.
     */
    export interface packet_structure_block_update {
        /** Position is the position of the structure block that is updated. */
        position: BlockCoordinates;
        /** StructureName is the name of the structure that was set in the structure block's UI. This is the name used to export the structure to a file. */
        structure_name: string;
        /** FilteredStructureName is a filtered version of StructureName with all the profanity removed. The client will use this over StructureName if this field is not empty and they have the "Filter Profanity" setting enabled. */
        filtered_structure_name: string;
        /** DataField is the name of a function to run, usually used during natural generation. A description can be found here: https://minecraft.wiki/w/Structure_Block#Data. */
        data_field: string;
        /** IncludePlayers specifies if the 'Include Players' toggle has been enabled, meaning players are also exported by the structure block. */
        include_players: boolean;
        /** ShowBoundingBox specifies if the structure block should have its bounds outlined. A thin line will encapsulate the bounds of the structure if set to true. */
        show_bounding_box: boolean;
        /** StructureBlockType is the type of the structure block updated. A list of structure block types that will be used can be found in the constants above. */
        structure_block_type: number;
        /** Settings is a struct of settings that should be used for exporting the structure. These settings are identical to the last sent in the StructureBlockUpdate packet by the client. */
        settings: StructureBlockSettings;
        /** RedstoneSaveMode is the mode that should be used to save the structure when used with redstone. In Java Edition, this is always stored in memory, but in Bedrock Edition it can be stored either to disk or memory. See the constants above for the options. */
        redstone_save_mode: number;
        /** ShouldTrigger specifies if the structure block should be triggered immediately after this packet reaches the server. */
        should_trigger: boolean;
        /** Waterlogged specifies if the structure block is waterlogged at the time of the packet being sent. */
        water_logged: boolean;
    }

    /**
     * ShowStoreOffer is sent by the server to show a Marketplace store offer to a player. It opens a window
     * client-side that displays the item.
     * The ShowStoreOffer packet only works on the partnered servers: Servers that are not partnered will not have
     * a store buttons show up in the in-game pause menu and will, as a result, not be able to open store offers
     * on the client side. Sending the packet does therefore not work when using a proxy that is not connected to
     * with the domain of one of the partnered servers.
     */
    export interface packet_show_store_offer {
        /** OfferID is a string that identifies the offer for which a window should be opened. While typically a UUID, the ID could be anything. */
        offer_id: string;
        /** ShowAll specifies if all other offers of the same 'author' as the one of the offer associated with the OfferID should also be displayed, alongside the target offer. */
        redirect_type: any;
    }

    /**
     * PurchaseReceipt is sent by the client to the server to notify the server it purchased an item from the
     * Marketplace store that was offered by the server. The packet is only used for partnered servers.
     */
    export interface packet_purchase_receipt {
        /** Receipts is a list of receipts, or proofs of purchases, for the offers that have been purchased by the player. */
        receipts: any;
    }

    export interface packet_player_skin {
        uuid: uuid;
        skin: Skin;
        skin_name: string;
        old_skin_name: string;
        is_verified: boolean;
    }

    /**
     * SubClientLogin is sent when a sub-client joins the server while another client is already connected to it.
     * The packet is sent as a result of split-screen game play, and allows up to four players to play using the
     * same network connection. After an initial Login packet from the 'main' client, each sub-client that
     * connects sends a SubClientLogin to request their own login.
     */
    export interface packet_sub_client_login {
        /** ConnectionRequest is a string containing information about the player and JWTs that may be used to verify if the player is connected to XBOX Live. The connection request also contains the necessary client public key to initiate encryption. The ConnectionRequest in this packet is identical to the one found in the Login packet. */
        tokens: any;
    }

    /**
     * AutomationClientConnect is used to make the client connect to a websocket server. This websocket server has
     * the ability to execute commands on the behalf of the client and it can listen for certain events fired by
     * the client.
     */
    export interface packet_initiate_web_socket_connection {
        /** ServerURI is the URI to make the client connect to. It can be, for example, 'localhost:8000/ws' to connect to a websocket server on the localhost at port 8000. */
        server: string;
    }

    /**
     * SetLastHurtBy is sent by the server to let the client know what entity type it was last hurt by. At this
     * moment, the packet is useless and should not be used. There is no behaviour that depends on if this
     * packet is sent or not.
     */
    export interface packet_set_last_hurt_by {
        entity_type: number;
    }

    /**
     * BookEdit is sent by the client when it edits a book. It is sent each time a modification was made and the
     * player stops its typing 'session', rather than simply after closing the book.
     */
    export interface packet_book_edit {
        type: any;
        slot: number;
        undefined: any;
    }

    /**
     * NPCRequest is sent by the client when it interacts with an NPC.
     * The packet is specifically made for Education Edition, where NPCs are available to use.
     */
    export interface packet_npc_request {
        /** EntityRuntimeID is the runtime ID of the NPC entity that the player interacted with. It is the same as sent by the server when spawning the entity. */
        runtime_entity_id: number;
        /** RequestType is the type of the request, which depends on the permission that the player has. It will be either a type that indicates that the NPC should show its dialog, or that it should open the editing window. */
        request_type: any;
        /** CommandString is the command string set in the NPC. It may consist of multiple commands, depending on what the player set in it. */
        command: string;
        /** ActionType is the type of the action to execute. */
        action_type: any;
        /** SceneName is the name of the scene. */
        scene_name: string;
    }

    /**
     * PhotoTransfer is sent by the server to transfer a photo (image) file to the client. It is typically used
     * to transfer photos so that the client can display it in a portfolio in Education Edition.
     * While previously usable in the default Bedrock Edition, the displaying of photos in books was disabled and
     * the packet now has little use anymore.
     */
    export interface packet_photo_transfer {
        /** PhotoName is the name of the photo to transfer. It is the exact file name that the client will download the photo as, including the extension of the file. */
        image_name: string;
        /** PhotoData is the raw data of the photo image. The format of this data may vary: Formats such as JPEG or PNG work, as long as PhotoName has the correct extension. */
        image_data: string;
        /** BookID is the ID of the book that the photo is associated with. If the PhotoName in a book with this ID is set to PhotoName, it will display the photo (provided Education Edition is used). The photo image is downloaded to a sub-folder with this book ID. */
        book_id: string;
        /** PhotoType is one of the three photo types above. */
        photo_type: number;
        /** SourceType is the source photo type. It is one of the three photo types above. */
        source_type: number;
        /** OwnerEntityUniqueID is the entity unique ID of the photo's owner. */
        owner_entity_unique_id: bigint;
        /** NewPhotoName is the new name of the photo. */
        new_photo_name: string;
    }

    /**
     * ModalFormRequest is sent by the server to make the client open a form. This form may be either a modal form
     * which has two options, a menu form for a selection of options and a custom form for properties.
     */
    export interface packet_modal_form_request {
        /** FormID is an ID used to identify the form. The ID is saved by the client and sent back when the player submits the form, so that the server can identify which form was submitted. */
        form_id: number;
        /** FormData is a JSON encoded object of form data. The content of the object differs, depending on the type of the form sent, which is also set in the JSON. */
        data: string;
    }

    /**
     * ModalFormResponse is sent by the client in response to a ModalFormRequest, after the player has submitted
     * the form sent. It contains the options/properties selected by the player, or a JSON encoded 'null' if
     * the form was closed by clicking the X at the top right corner of the form.
     */
    export interface packet_modal_form_response {
        /** FormID is the form ID of the form the client has responded to. It is the same as the ID sent in the ModalFormRequest, and may be used to identify which form was submitted. */
        form_id: number;
        /** HasResponseData is true if the client provided response data. */
        has_response_data: boolean;
        /** ResponseData is a JSON encoded value representing the response of the player. For a modal form, the response is either true or false, for a menu form, the response is an integer specifying the index of the button clicked, and for a custom form, the response is an array containing a value for each element. */
        data: any;
        /** HasCancelReason is true if the client provided a reason for the form being cancelled. */
        has_cancel_reason: boolean;
        undefined: any;
    }

    /**
     * ServerSettingsRequest is sent by the client to request the settings specific to the server. These settings
     * are shown in a separate tab client-side, and have the same structure as a custom form.
     * ServerSettingsRequest has no fields.
     */
    export interface packet_server_settings_request {
    }

    /**
     * ServerSettingsResponse is optionally sent by the server in response to a ServerSettingsRequest from the
     * client. It is structured the same as a ModalFormRequest packet, and if filled out correctly, will show
     * a specific tab for the server in the settings of the client. A ModalFormResponse packet is sent by the
     * client in response to a ServerSettingsResponse, when the client fills out the settings and closes the
     * settings again.
     */
    export interface packet_server_settings_response {
        /** FormID is an ID used to identify the form. The ID is saved by the client and sent back when the player submits the form, so that the server can identify which form was submitted. */
        form_id: number;
        /** FormData is a JSON encoded object of form data. The content of the object differs, depending on the type of the form sent, which is also set in the JSON. */
        data: string;
    }

    /**
     * ShowProfile is sent by the server to show the XBOX Live profile of one player to another.
     */
    export interface packet_show_profile {
        /** XUID is the XBOX Live User ID of the player whose profile should be shown to the player. If it is not a valid XUID, the client ignores the packet. */
        xuid: string;
    }

    /**
     * SetDefaultGameType is sent by the client when it toggles the default game type in the settings UI, and is
     * sent by the server when it actually changes the default game type, resulting in the toggle being changed
     * in the settings UI.
     */
    export interface packet_set_default_game_type {
        /** GameType is the new game type that is set. When sent by the client, this is the requested new default game type. */
        gamemode: GameMode;
    }

    /**
     * RemoveObjective is sent by the server to remove a scoreboard objective. It is used to stop showing a
     * scoreboard to a player.
     */
    export interface packet_remove_objective {
        /** ObjectiveName is the name of the objective that the scoreboard currently active has. This name must be identical to the one sent in the SetDisplayObjective packet. */
        objective_name: string;
    }

    /**
     * SetDisplayObjective is sent by the server to display an object as a scoreboard to the player. Once sent,
     * it should be followed up by a SetScore packet to set the lines of the packet.
     */
    export interface packet_set_display_objective {
        /** DisplaySlot is the slot in which the scoreboard should be displayed. Available options can be found in the constants above. */
        display_slot: string;
        /** ObjectiveName is the name of the objective that the scoreboard displays. Filling out a random unique value for this field works: It is not displayed in the scoreboard. */
        objective_name: string;
        /** DisplayName is the name, or title, that is displayed at the top of the scoreboard. */
        display_name: string;
        /** CriteriaName is the name of the criteria that need to be fulfilled in order for the score to be increased. This can be any kind of string and does not show up client-side. */
        criteria_name: string;
        /** SortOrder is the order in which entries on the scoreboard should be sorted. It is one of the constants that may be found above. */
        sort_order: number;
    }

    /**
     * SetScore is sent by the server to send the contents of a scoreboard to the player. It may be used to either
     * add, remove or edit entries on the scoreboard.
     */
    export interface packet_set_score {
        /** ActionType is the type of the action to execute upon the scoreboard with the entries that the packet has. If ActionType is ScoreboardActionModify, all entries will be added to the scoreboard if not yet present, or modified if already present. If set to ScoreboardActionRemove, all scoreboard entries set will be removed from the scoreboard. */
        action: any;
        entries: any;
    }

    /**
     * LabTable is sent by the client to let the server know it started a chemical reaction in Education Edition,
     * and is sent by the server to other clients to show the effects.
     * The packet is only functional if Education features are enabled.
     */
    export interface packet_lab_table {
        /** ActionType is the type of the action that was executed. It is one of the constants above. Typically, only LabTableActionCombine is sent by the client, whereas LabTableActionReact is sent by the server. */
        action_type: any;
        /** Position is the position at which the lab table used was located. */
        position: vec3i;
        /** ReactionType is the type of the reaction that took place as a result of the items put into the lab table. The reaction type can be either that of an item or a particle, depending on whatever the result was of the reaction. */
        reaction_type: number;
    }

    /**
     * UpdateBlockSynced is sent by the server to synchronise the falling of a falling block entity with the
     * transitioning back and forth from and to a solid block. It is used to prevent the entity from flickering,
     * and is used in places such as the pushing of blocks with pistons.
     */
    export interface packet_update_block_synced {
        /** Position is the block position at which a block is updated. */
        position: BlockCoordinates;
        /** NewBlockRuntimeID is the runtime ID of the block that is placed at Position after sending the packet to the client. */
        block_runtime_id: number;
        /** Flags is a combination of flags that specify the way the block is updated client-side. It is a combination of the flags above, but typically sending only the BlockUpdateNetwork flag is sufficient. */
        flags: UpdateBlockFlags;
        /** Layer is the world layer on which the block is updated. For most blocks, this is the first layer, as that layer is the default layer to place blocks on, but for blocks inside of each other, this differs. */
        layer: number;
        /** EntityUniqueID is the unique ID of the falling block entity that the block transitions to or that the entity transitions from. Note that for both possible values for TransitionType, the EntityUniqueID should point to the falling block entity involved. */
        entity_unique_id: number;
        /** TransitionType is the type of the transition that happened. It is either BlockToEntityTransition, when a block placed becomes a falling entity, or EntityToBlockTransition, when a falling entity hits the ground and becomes a solid block again. */
        transition_type: any;
    }

    /**
     * MoveActorDelta is sent by the server to move an entity. The packet is specifically optimised to save as
     * much space as possible, by only writing non-zero fields.
     * As of 1.16.100, this packet no longer actually contains any deltas.
     */
    export interface packet_move_entity_delta {
        /** EntityRuntimeID is the runtime ID of the entity that is being moved. The packet works provided a non-player entity with this runtime ID is present. */
        runtime_entity_id: number;
        /** Flags is a list of flags that specify what data is in the packet. */
        flags: DeltaMoveFlags;
        x: any;
        y: any;
        z: any;
        rot_x: any;
        rot_y: any;
        rot_z: any;
    }

    export type DeltaMoveFlags = any; // TODO: Implement type: bitflags

    /**
     * SetScoreboardIdentity is sent by the server to change the identity type of one of the entries on a
     * scoreboard. This is used to change, for example, an entry pointing to a player, to a fake player when it
     * leaves the server, and to change it back to a real player when it joins again.
     * In non-vanilla situations, the packet is quite useless.
     */
    export interface packet_set_scoreboard_identity {
        /** ActionType is the type of the action to execute. The action is either ScoreboardIdentityActionRegister to associate an identity with the entry, or ScoreboardIdentityActionClear to remove associations with an entity. */
        action: any;
        /** Entries is a list of all entries in the packet. Each of these entries points to one of the entries on a scoreboard. Depending on ActionType, their identity will either be registered or cleared. */
        entries: any;
    }

    /**
     * SetLocalPlayerAsInitialised is sent by the client in response to a PlayStatus packet with the status set
     * to spawn. The packet marks the moment at which the client is fully initialised and can receive any packet
     * without discarding it.
     */
    export interface packet_set_local_player_as_initialized {
        /** EntityRuntimeID is the entity runtime ID the player was assigned earlier in the login sequence in the StartGame packet. */
        runtime_entity_id: number;
    }

    /**
     * UpdateSoftEnum is sent by the server to update a soft enum, also known as a dynamic enum, previously sent
     * in the AvailableCommands packet. It is sent whenever the enum should get new options or when some of its
     * options should be removed.
     * The UpdateSoftEnum packet will apply for enums that have been set in the AvailableCommands packet with the
     * 'Dynamic' field of the CommandEnum set to true.
     */
    export interface packet_update_soft_enum {
        /** EnumType is the type of the enum. This type must be identical to the one set in the AvailableCommands packet, because the client uses this to recognise which enum to update. */
        enum_type: string;
        /** Options is a list of options that should be updated. Depending on the ActionType field, either these options will be added to the enum, the enum options will be set to these options or all of these options will be removed from the enum. */
        options: any;
        /** ActionType is the type of the action to execute on the enum. The Options field has a different result, depending on what ActionType is used. */
        action_type: any;
    }

    /**
     * NetworkStackLatency is sent by the server (and the client, on development builds) to measure the latency
     * over the entire Minecraft stack, rather than the RakNet latency. It has other usages too, such as the
     * ability to be used as some kind of acknowledgement packet, to know when the client has received a certain
     * other packet.
     */
    export interface packet_network_stack_latency {
        /** Timestamp is the timestamp of the network stack latency packet. The client will, if NeedsResponse is set to true, send a NetworkStackLatency packet with this same timestamp packet in response. */
        timestamp: bigint;
        /** NeedsResponse specifies if the sending side of this packet wants a response to the packet, meaning that the other side should send a NetworkStackLatency packet back. */
        needs_response: number;
    }

    /**
     * ScriptCustomEvent is sent by both the client and the server. It is a way to let scripts communicate with
     * the server, so that the client can let the server know it triggered an event, or the other way around.
     * It is essentially an RPC kind of system.
     * Deprecated: ScriptCustomEvent is deprecated as of 1.20.10.
     */
    export interface packet_script_custom_event {
        /** EventName is the name of the event. The script and the server will use this event name to identify the data that is sent. */
        event_name: string;
        /** EventData is the data of the event. This data is typically a JSON encoded string, that the script is able to encode and decode too. */
        event_data: string;
    }

    /**
     * SpawnParticleEffect is sent by the server to spawn a particle effect client-side. Unlike other packets that
     * result in the appearing of particles, this packet can show particles that are not hardcoded in the client.
     * They can be added and changed through behaviour packs to implement custom particles.
     */
    export interface packet_spawn_particle_effect {
        /** Dimension is the dimension that the particle is spawned in. Its exact usage is not clear, as the dimension has no direct effect on the particle. */
        dimension: number;
        /** EntityUniqueID is the unique ID of the entity that the spawned particle may be attached to. If this ID is not -1, the Position below will be interpreted as relative to the position of the entity associated with this unique ID. */
        entity_id: number;
        /** Position is the position that the particle should be spawned at. If the position is too far away from the player, it will not show up. If EntityUniqueID is not -1, the position will be relative to the position of the entity. */
        position: vec3f;
        /** ParticleName is the name of the particle that should be shown. This name may point to a particle effect that is built-in, or to one implemented by behaviour packs. */
        particle_name: string;
        molang_variables: string | undefined;
    }

    /**
     * AvailableActorIdentifiers is sent by the server at the start of the game to let the client know all
     * entities that are available on the server.
     */
    export interface packet_available_entity_identifiers {
        /** SerialisedEntityIdentifiers is a network NBT serialised compound of all entity identifiers that are available in the server. */
        nbt: nbt;
    }

    /**
     * Not used. Use `packet_level_sound_event`.
     */
    export interface packet_level_sound_event_v2 {
        sound_id: number;
        position: vec3f;
        block_id: number;
        entity_type: string;
        is_baby_mob: boolean;
        is_global: boolean;
    }

    /**
     * NetworkChunkPublisherUpdate is sent by the server to change the point around which chunks are and remain
     * loaded. This is useful for mini-game servers, where only one area is ever loaded, in which case the
     * NetworkChunkPublisherUpdate packet can be sent in the middle of it, so that no chunks ever need to be
     * additionally sent during the course of the game.
     * In reality, the packet is not extraordinarily useful, and most servers just send it constantly at the
     * position of the player.
     * If the packet is not sent at all, no chunks will be shown to the player, regardless of where they are sent.
     */
    export interface packet_network_chunk_publisher_update {
        /** Position is the block position around which chunks loaded will remain shown to the client. Most servers set this position to the position of the player itself. #TODO: Check putSignedBlockPosition */
        coordinates: BlockCoordinates;
        /** Radius is the radius in blocks around Position that chunks sent show up in and will remain loaded in. Unlike the RequestChunkRadius and ChunkRadiusUpdated packets, this radius is in blocks rather than chunks, so the chunk radius needs to be multiplied by 16. (Or shifted to the left by 4.) */
        radius: number;
        saved_chunks: any;
    }

    /**
     * BiomeDefinitionList is sent by the server to let the client know all biomes that are available and
     * implemented on the server side. It is much like the AvailableActorIdentifiers packet, but instead
     * functions for biomes.
     */
    export interface packet_biome_definition_list {
        /** BiomeDefinitions is a list of biomes that are available on the server. */
        biome_definitions: any;
        /** StringList is a makeshift dictionary implementation Mojang created to try and reduce the size of the overall packet. It is a list of common strings that are used in the biome definitions. */
        string_list: any;
    }

    /**
     * LevelSoundEvent is sent by the server to make any kind of built-in sound heard to a player. It is sent to,
     * for example, play a stepping sound or a shear sound. The packet is also sent by the client, in which case
     * it could be forwarded by the server to the other players online. If possible, the packets from the client
     * should be ignored however, and the server should play them on its own accord.
     */
    export interface packet_level_sound_event {
        /** SoundType is the type of the sound to play. Some of the sound types require additional data, which is set in the EventData field. */
        sound_id: SoundType;
        /** Position is the position of the sound event. The player will be able to hear the direction of the sound based on what position is sent here. */
        position: vec3f;
        /** ExtraData is a packed integer that some sound types use to provide extra data. An example of this is the note sound, which is composed of a pitch and an instrument type. */
        extra_data: number;
        /** EntityType is the string entity type of the entity that emitted the sound, for example 'minecraft:skeleton'. Some sound types use this entity type for additional data. */
        entity_type: string;
        /** BabyMob specifies if the sound should be that of a baby mob. It is most notably used for parrot imitations, which will change based on if this field is set to true or not. */
        is_baby_mob: boolean;
        /** DisableRelativeVolume specifies if the sound should be played relatively or not. If set to true, the sound will have full volume, regardless of where the Position is, whereas if set to false, the sound's volume will be based on the distance to Position. */
        is_global: boolean;
        /** EntityUniqueID is the unique ID of a source entity. The unique ID is a value that remains consistent across different sessions of the same world, but most servers simply fill the runtime ID of the entity out for this field. */
        entity_unique_id: bigint;
    }

    /**
     * LevelEventGeneric is sent by the server to send a 'generic' level event to the client. This packet sends an
     * NBT serialised object and may for that reason be used for any event holding additional data.
     */
    export interface packet_level_event_generic {
        /** EventID is a unique identifier that identifies the event called. The data that follows has fields in the NBT depending on what event it is. */
        event_id: number;
        /** SerialisedEventData is a network little endian serialised object of event data, with fields that vary depending on EventID. Unlike many other NBT structures, this data is not actually in a compound but just loosely floating NBT tags. To decode using the nbt package, you would need to append 0x0a00 at the start (compound id and name length) and add 0x00 at the end, to manually wrap it in a compound. Likewise, you would have to remove these bytes when encoding. */
        nbt: nbtLoop;
    }

    /**
     * LecternUpdate is sent by the client to update the server on which page was opened in a book on a lectern,
     * or if the book should be removed from it.
     */
    export interface packet_lectern_update {
        /** Page is the page number in the book that was opened by the player on the lectern. */
        page: number;
        /** PageCount is the number of pages that the book opened in the lectern has. */
        page_count: number;
        /** Position is the position of the lectern that was updated. If no lectern is at the block position, the packet should be ignored. */
        position: vec3i;
    }

    /**
     * This packet was removed.
     */
    export interface packet_video_stream_connect {
        server_uri: string;
        frame_send_frequency: number;
        action: any;
        resolution_x: number;
        resolution_y: number;
    }

    /**
     * ClientCacheStatus is sent by the client to the server at the start of the game. It is sent to let the
     * server know if it supports the client-side blob cache. Clients such as Nintendo Switch do not support the
     * cache, and attempting to use it anyway will fail.
     */
    export interface packet_client_cache_status {
        /** Enabled specifies if the blob cache is enabled. If false, the server should not attempt to use the blob cache. If true, it may do so, but it may also choose not to use it. */
        enabled: boolean;
    }

    /**
     * OnScreenTextureAnimation is sent by the server to show a certain animation on the screen of the player.
     * The packet is used, as an example, for when a raid is triggered and when a raid is defeated.
     */
    export interface packet_on_screen_texture_animation {
        /** AnimationType is the type of the animation to show. The packet provides no further extra data to allow modifying the duration or other properties of the animation. */
        animation_type: number;
    }

    /**
     * MapCreateLockedCopy is sent by the server to create a locked copy of one map into another map. In vanilla,
     * it is used in the cartography table to create a map that is locked and cannot be modified.
     */
    export interface packet_map_create_locked_copy {
        /** OriginalMapID is the ID of the map that is being copied. The locked copy will obtain all content that is visible on this map, except the content will not change. */
        original_map_id: number;
        /** NewMapID is the ID of the map that holds the locked copy of the map that OriginalMapID points to. Its contents will be impossible to change. */
        new_map_id: number;
    }

    /**
     * StructureTemplateDataRequest is sent by the client to request data of a structure.
     */
    export interface packet_structure_template_data_export_request {
        /** StructureName is the name of the structure that was set in the structure block's UI. This is the name used to export the structure to a file. */
        name: string;
        /** Position is the position of the structure block that has its template data requested. */
        position: BlockCoordinates;
        /** Settings is a struct of settings that should be used for exporting the structure. These settings are identical to the last sent in the StructureBlockUpdate packet by the client. */
        settings: StructureBlockSettings;
        /** RequestType specifies the type of template data request that the player sent. */
        request_type: any;
    }

    /**
     * StructureTemplateDataResponse is sent by the server to send data of a structure to the client in response
     * to a StructureTemplateDataRequest packet.
     */
    export interface packet_structure_template_data_export_response {
        name: string;
        success: boolean;
        nbt: any;
        /** ResponseType specifies the response type of the packet. This depends on the RequestType field sent in the StructureTemplateDataRequest packet and is one of the constants above. */
        response_type: any;
    }

    /**
     * No longer used.
     */
    export interface packet_update_block_properties {
        nbt: nbt;
    }

    /**
     * ClientCacheBlobStatus is part of the blob cache protocol. It is sent by the client to let the server know
     * what blobs it needs and which blobs it already has, in an ACK type system.
     */
    export interface packet_client_cache_blob_status {
        /** The number of MISSes in this packet */
        misses: number;
        /** The number of HITs in this packet */
        haves: number;
        /** A list of blob hashes that the client does not have a blob available for. The server should send the blobs matching these hashes as soon as possible. */
        missing: any;
        /** A list of hashes that the client does have a cached blob for. Server doesn't need to send. */
        have: any;
    }

    /**
     * ClientCacheMissResponse is part of the blob cache protocol. It is sent by the server in response to a
     * ClientCacheBlobStatus packet and contains the blob data of all blobs that the client acknowledged not to
     * have yet.
     */
    export interface packet_client_cache_miss_response {
        blobs: any;
    }

    /**
     * EducationSettings is a packet sent by the server to update Minecraft: Education Edition related settings.
     * It is unused by the normal base game.
     */
    export interface packet_education_settings {
        /** CodeBuilderDefaultURI is the default URI that the code builder is ran on. Using this, a Code Builder program can make code directly affect the server. */
        CodeBuilderDefaultURI: string;
        /** CodeBuilderTitle is the title of the code builder shown when connected to the CodeBuilderDefaultURI. */
        CodeBuilderTitle: string;
        /** CanResizeCodeBuilder specifies if clients connected to the world should be able to resize the code builder when it is opened. */
        CanResizeCodeBuilder: boolean;
        disable_legacy_title_bar: boolean;
        post_process_filter: string;
        screenshot_border_path: string;
        has_agent_capabilities: boolean;
        agent_capabilities: any;
        HasOverrideURI: boolean;
        OverrideURI: any;
        /** HasQuiz specifies if the world has a quiz connected to it. */
        HasQuiz: boolean;
        has_external_link_settings: boolean;
        external_link_settings: any;
    }

    /**
     * Emote is sent by both the server and the client. When the client sends an emote, it sends this packet to
     * the server, after which the server will broadcast the packet to other players online.
     */
    export interface packet_emote {
        /** EntityRuntimeID is the entity that sent the emote. When a player sends this packet, it has this field set as its own entity runtime ID. */
        entity_id: number;
        /** EmoteID is the ID of the emote to send. */
        emote_id: string;
        /** EmoteLength is the number of ticks that the emote lasts for. */
        emote_length_ticks: number;
        /** XUID is the Xbox User ID of the player that sent the emote. It is only set when the emote is used by a player that is authenticated with Xbox Live. */
        xuid: string;
        /** PlatformID is an identifier only set for particular platforms when using an emote (presumably only for Nintendo Switch). It is otherwise an empty string, and is used to decide which players are able to emote with each other. */
        platform_id: string;
        /** Flags is a combination of flags that change the way the Emote packet operates. When the server sends this packet to other players, EmoteFlagServerSide must be present. */
        flags: any;
    }

    /**
     * MultiPlayerSettings is sent by the client to update multi-player related settings server-side and sent back
     * to online players by the server.
     * The MultiPlayerSettings packet is a Minecraft: Education Edition packet. It has no functionality for the
     * base game.
     */
    export interface packet_multiplayer_settings {
        /** ActionType is the action that should be done when this packet is sent. It is one of the constants that may be found above. */
        action_type: any;
    }

    /**
     * SettingsCommand is sent by the client when it changes a setting in the settings that results in the issuing
     * of a command to the server, such as when Show Coordinates is enabled.
     */
    export interface packet_settings_command {
        /** CommandLine is the full command line that was sent to the server as a result of the setting that the client changed. */
        command_line: string;
        /** SuppressOutput specifies if the client requests the suppressing of the output of the command that was executed. Generally this is set to true, as the client won't need a message to confirm the output of the change. */
        suppress_output: boolean;
    }

    /**
     * AnvilDamage is sent by the client to request the dealing damage to an anvil. This packet is completely
     * pointless and the server should never listen to it.
     */
    export interface packet_anvil_damage {
        /** Damage is the damage that the client requests to be dealt to the anvil. */
        damage: number;
        /** AnvilPosition is the position in the world that the anvil can be found at. */
        position: BlockCoordinates;
    }

    /**
     * CompletedUsingItem is sent by the server to tell the client that it should be done using the item it is
     * currently using.
     */
    export interface packet_completed_using_item {
        /** UsedItemID is the item ID of the item that the client completed using. This should typically be the ID of the item held in the hand. */
        used_item_id: number;
        /** UseMethod is the method of the using of the item that was completed. It is one of the constants that may be found above. */
        use_method: any;
    }

    /**
     * NetworkSettings is sent by the server to update a variety of network settings. These settings modify the
     * way packets are sent over the network stack.
     */
    export interface packet_network_settings {
        /** CompressionThreshold is the minimum size of a packet that is compressed when sent. If the size of a packet is under this value, it is not compressed. When set to 0, all packets will be left uncompressed. */
        compression_threshold: number;
        /** CompressionAlgorithm is the algorithm that is used to compress packets. */
        compression_algorithm: any;
        /** ClientThrottle regulates whether the client should throttle players when exceeding of the threshold. Players outside threshold will not be ticked, improving performance on low-end devices. */
        client_throttle: boolean;
        /** ClientThrottleThreshold is the threshold for client throttling. If the number of players exceeds this value, the client will throttle players. */
        client_throttle_threshold: number;
        /** ClientThrottleScalar is the scalar for client throttling. The scalar is the amount of players that are ticked when throttling is enabled. */
        client_throttle_scalar: number;
    }

    /**
     * PlayerAuthInput is sent by the client to allow for server authoritative movement. It is used to synchronise
     * the player input with the position server-side.
     * The client sends this packet when the ServerAuthoritativeMovementMode field in the StartGame packet is set
     * to true, instead of the MovePlayer packet. The client will send this packet once every tick.
     */
    export interface packet_player_auth_input {
        /** Pitch that the player reports it has. */
        pitch: number;
        /** Yaw that player reports it has. */
        yaw: number;
        /** Position holds the position that the player reports it has. */
        position: vec3f;
        /** MoveVector is a Vec2 that specifies the direction in which the player moved, as a combination of X/Z values which are created using the WASD/controller stick state. */
        move_vector: vec2f;
        /** HeadYaw is the horizontal rotation of the head that the player reports it has. */
        head_yaw: number;
        /** InputData is a combination of bit flags that together specify the way the player moved last tick. It is a combination of the flags above. */
        input_data: InputFlag;
        /** InputMode specifies the way that the client inputs data to the screen. It is one of the constants that may be found above. */
        input_mode: any;
        /** PlayMode specifies the way that the player is playing. The values it holds, which are rather random, may be found above. */
        play_mode: any;
        /** InteractionModel is a constant representing the interaction model the player is using. */
        interaction_model: any;
        /** interact_rotation is the rotation the player is looking that they intend to use for interactions. This is only different to Pitch and Yaw in cases such as VR or when custom cameras being used. */
        interact_rotation: vec2f;
        /** Tick is the server tick at which the packet was sent. It is used in relation to CorrectPlayerMovePrediction. */
        tick: number;
        /** Delta was the delta between the old and the new position. There isn't any practical use for this field as it can be calculated by the server itself. */
        delta: vec3f;
        transaction: any;
        item_stack_request: any;
        undefined: any;
        block_action: any;
        /** AnalogueMoveVector is a Vec2 that specifies the direction in which the player moved, as a combination of X/Z values which are created using an analogue input. */
        analogue_move_vector: vec2f;
        /** CameraOrientation is the vector that represents the camera's forward direction which can be used to transform movement to be camera relative. */
        camera_orientation: vec3f;
        /** RawMoveVector is the value of MoveVector before it is affected by input permissions, sneaking/fly speeds and isn't normalised for analogue inputs. */
        raw_move_vector: vec2f;
    }

    export type InputFlag = any; // TODO: Implement type: bitflags

    /**
     * CreativeContent is a packet sent by the server to set the creative inventory's content for a player.
     * Introduced in 1.16, this packet replaces the previous method - sending an InventoryContent packet with
     * creative inventory window ID.
     * As of v1.16.100, this packet must be sent during the login sequence. Not sending it will stop the client
     * from joining the server.
     */
    export interface packet_creative_content {
        /** The groups that are displayed within the creative inventory menu. */
        groups: any;
        /** Individual items that are displayed within the creative inventory menu, grouped by their category. */
        items: any;
    }

    /**
     * PlayerEnchantOptions is sent by the server to update the enchantment options displayed when the user opens
     * the enchantment table and puts an item in. This packet was added in 1.16 and allows the server to decide on
     * the enchantments that can be selected by the player.
     * The PlayerEnchantOptions packet should be sent once for every slot update of the enchantment table. The
     * vanilla server sends an empty PlayerEnchantOptions packet when the player opens the enchantment table
     * (air is present in the enchantment table slot) and sends the packet with actual enchantments in it when
     * items are put in that can have enchantments.
     */
    export interface packet_player_enchant_options {
        /** Options is a list of possible enchantment options for the item that was put into the enchantment table. */
        options: any;
    }

    /**
     * ItemStackRequest is sent by the client to change item stacks in an inventory. It is essentially a
     * replacement of the InventoryTransaction packet added in 1.16 for inventory specific actions, such as moving
     * items around or crafting. The InventoryTransaction packet is still used for actions such as placing blocks
     * and interacting with entities.
     */
    export interface packet_item_stack_request {
        requests: any;
    }

    /**
     * ItemStackResponse is sent by the server in response to an ItemStackRequest packet from the client. This
     * packet is used to either approve or reject ItemStackRequests from the client. If a request is approved, the
     * client will simply continue as normal. If rejected, the client will undo the actions so that the inventory
     * should be in sync with the server again.
     */
    export interface packet_item_stack_response {
        /** Responses is a list of responses to ItemStackRequests sent by the client before. Responses either approve or reject a request from the client. Vanilla limits the size of this slice to 4096. */
        responses: ItemStackResponses;
    }

    /**
     * PlayerArmourDamage is sent by the server to damage the armour of a player. It is a very efficient packet,
     * but generally it's much easier to just send a slot update for the damaged armour.
     */
    export interface packet_player_armor_damage {
        /** Bitset holds a bitset of 4 bits that indicate which pieces of armour need to have damage dealt to them. The first bit, when toggled, is for a helmet, the second for the chestplate, the third for the leggings and the fourth for boots. */
        type: ArmorDamageType;
        helmet_damage: any;
        chestplate_damage: any;
        leggings_damage: any;
        boots_damage: any;
        body_damage: any;
    }

    export type ArmorDamageType = any; // TODO: Implement type: bitflags

    /**
     * CodeBuilder is an Education Edition packet sent by the server to the client to open the URL to a Code
     * Builder (websocket) server.
     */
    export interface packet_code_builder {
        /** URL is the url to the Code Builder (websocket) server. */
        url: string;
        /** ShouldOpenCodeBuilder specifies if the client should automatically open the Code Builder app. If set to true, the client will attempt to use the Code Builder app to connect to and interface with the server running at the URL above. */
        should_open_code_builder: boolean;
    }

    /**
     * UpdatePlayerGameType is sent by the server to change the game mode of a player. It is functionally
     * identical to the SetPlayerGameType packet.
     */
    export interface packet_update_player_game_type {
        /** GameType is the new game type of the player. It is one of the constants that can be found in set_player_game_type.go. Some of these game types require additional flags to be set in an AdventureSettings packet for the game mode to obtain its full functionality. */
        gamemode: GameMode;
        /** PlayerUniqueID is the entity unique ID of the player that should have its game mode updated. If this packet is sent to other clients with the player unique ID of another player, nothing happens. */
        player_unique_id: number;
        tick: number;
    }

    /**
     * EmoteList is sent by the client every time it joins the server and when it equips new emotes. It may be
     * used by the server to find out which emotes the client has available. If the player has no emotes equipped,
     * this packet is not sent.
     * Under certain circumstances, this packet is also sent from the server to the client, but I was unable to
     * find when this is done.
     */
    export interface packet_emote_list {
        /** PlayerRuntimeID is the runtime ID of the player that owns the emote pieces below. If sent by the client, this player runtime ID is always that of the player itself. */
        player_id: number;
        /** EmotePieces is a list of emote pieces that the player with the runtime ID above has. */
        emote_pieces: any;
    }

    /**
     * PositionTrackingDBClientRequest is a packet sent by the client to request the position and dimension of a
     * 'tracking ID'. These IDs are tracked in a database by the server. In 1.16, this is used for lodestones.
     * The client will send this request to find the position a lodestone compass needs to point to. If found, it
     * will point to the lodestone. If not, it will start spinning around.
     * A PositionTrackingDBServerBroadcast packet should be sent in response to this packet.
     */
    export interface packet_position_tracking_db_request {
        /** RequestAction is the action that should be performed upon the receiving of the packet. It is one of the constants found above. */
        action: any;
        /** TrackingID is a unique ID used to identify the request. The server responds with a PositionTrackingDBServerBroadcast packet holding the same ID, so that the client can find out what that packet was in response to. */
        tracking_id: number;
    }

    /**
     * PositionTrackingDBServerBroadcast is sent by the server in response to the
     * PositionTrackingDBClientRequest packet. This packet is, as of 1.16, currently only used for lodestones. The
     * server maintains a database with tracking IDs and their position and dimension. The client will request
     * these tracking IDs, (NBT tag set on the lodestone compass with the tracking ID?) and the server will
     * respond with the status of those tracking IDs.
     * What is actually done with the data sent depends on what the client chooses to do with it. For the
     * lodestone compass, it is used to make the compass point towards lodestones and to make it spin if the
     * lodestone at a position is no longer there.
     */
    export interface packet_position_tracking_db_broadcast {
        /** BroadcastAction specifies the status of the position tracking DB response. It is one of the constants above, specifying the result of the request with the ID below. The Update action is sent for setting the position of a lodestone compass, the Destroy and NotFound to indicate that there is not (no longer) a lodestone at that position. */
        broadcast_action: any;
        /** TrackingID is the ID of the PositionTrackingDBClientRequest packet that this packet was in response to. The tracking ID is also present as the 'id' field in the SerialisedData field. */
        tracking_id: number;
        nbt: nbt;
    }

    /**
     * DebugInfo is a packet sent by the server to the client. It does not seem to do anything when sent to the
     * normal client in 1.16.
     */
    export interface packet_debug_info {
        /** PlayerUniqueID is the unique ID of the player that the packet is sent to. */
        player_unique_id: number;
        /** Data is the debug data. */
        data: Buffer;
    }

    /**
     * PacketViolationWarning is sent by the client when it receives an invalid packet from the server. It holds
     * some information on the error that occurred.
     */
    export interface packet_packet_violation_warning {
        violation_type: any;
        /** Severity specifies the severity of the packet violation. The action the client takes after this violation depends on the severity sent. */
        severity: any;
        /** PacketID is the ID of the invalid packet that was received. */
        packet_id: number;
        /** ViolationContext holds a description on the violation of the packet. */
        reason: string;
    }

    /**
     * MotionPredictionHints is sent by the server to the client. There is a predictive movement component for
     * entities. This packet fills the "history" of that component and entity movement is computed based on the
     * points. Vanilla sends this packet instead of the SetActorMotion packet when 'spatial optimisations' are
     * enabled.
     */
    export interface packet_motion_prediction_hints {
        /** EntityRuntimeID is the runtime ID of the entity whose velocity is sent to the client. */
        entity_runtime_id: number;
        /** Velocity is the server-calculated velocity of the entity at the point of sending the packet. */
        velocity: vec3f;
        /** OnGround specifies if the server currently thinks the entity is on the ground. */
        on_ground: boolean;
    }

    /**
     * AnimateEntity is sent by the server to animate an entity client-side. It may be used to play a single
     * animation, or to activate a controller which can start a sequence of animations based on different
     * conditions specified in an animation controller.
     * Much of the documentation of this packet can be found at
     * https://learn.microsoft.com/minecraft/creator/reference/content/animationsreference.
     */
    export interface packet_animate_entity {
        /** Animation is the name of a single animation to start playing. */
        animation: string;
        /** NextState is the first state to start with. These states are declared in animation controllers (which, in themselves, are animations too). These states in turn may have animations and transitions to move to a next state. */
        next_state: string;
        /** StopCondition is a MoLang expression that specifies when the animation should be stopped. */
        stop_condition: string;
        /** StopConditionVersion is the MoLang stop condition version. */
        stop_condition_version: number;
        /** Controller is the animation controller that is used to manage animations. These controllers decide when to play which animation. */
        controller: string;
        /** How long to move from the previous animation to the next. */
        blend_out_time: number;
        /** EntityRuntimeIDs is list of runtime IDs of entities that the animation should be applied to. */
        runtime_entity_ids: any;
    }

    /**
     * CameraShake is sent by the server to make the camera shake client-side. This feature was added for map-
     * making partners.
     */
    export interface packet_camera_shake {
        /** Intensity is the intensity of the shaking. The client limits this value to 4, so anything higher may not work. */
        intensity: number;
        /** Duration is the number of seconds the camera will shake for. */
        duration: number;
        /** Type is the type of shake, and is one of the constants listed above. The different type affects how the shake looks in game. */
        type: number;
        /** Action is the action to be performed, and is one of the constants listed above. Currently the different actions will either add or stop shaking the client. */
        action: any;
    }

    /**
     * PlayerFog is sent by the server to render the different fogs in the Stack. The types of fog are controlled
     * by resource packs to change how they are rendered, and the ability to create custom fog.
     */
    export interface packet_player_fog {
        /** Stack is a list of fog identifiers to be sent to the client. Examples of fog identifiers are "minecraft:fog_ocean" and "minecraft:fog_hell". */
        stack: any;
    }

    /**
     * CorrectPlayerMovePrediction is sent by the server if and only if StartGame.ServerAuthoritativeMovementMode
     * is set to AuthoritativeMovementModeServerWithRewind. The packet is used to correct movement at a specific
     * point in time.
     */
    export interface packet_correct_player_move_prediction {
        prediction_type: any;
        /** Position is the position that the player is supposed to be at at the tick written in the field below. The client will change its current position based on movement after that tick starting from the Position. */
        position: vec3f;
        /** Delta is the change in position compared to what the client sent as its position at that specific tick. */
        delta: vec3f;
        vehicle_rotation: any;
        /** OnGround specifies if the player was on the ground at the time of the tick below. */
        on_ground: boolean;
        /** Tick is the tick of the movement which was corrected by this packet. */
        tick: number;
    }

    /**
     * ItemRegistryPacket is used to declare what items the server makes available, and components of custom items.
     * After 1.21.60, this packet replaces the functionality of the "itemstates" field in the StartGamePacket
     * In pre-1.21.60 versions, this was the ItemComponentPacket, and was
     * sent by the server to attach client-side components to custom items.
     */
    export interface packet_item_registry {
        /** `items` holds a list of all items. */
        itemstates: Itemstates;
    }

    /**
     * FilterText is sent by the both the client and the server. The client sends the packet to the server to
     * allow the server to filter the text server-side. The server then responds with the same packet and the
     * safer version of the text.
     */
    export interface packet_filter_text_packet {
        /** Text is either the text from the client or the safer version of the text sent by the server. */
        text: string;
        /** FromServer indicates if the packet was sent by the server or not. */
        from_server: boolean;
    }

    /**
     * ClientBoundDebugRenderer is sent by the server to spawn an outlined cube on client-side.
     */
    export interface packet_debug_renderer {
        /** Type is the type of action. It is one of the constants above. */
        type: any;
        undefined: any;
    }

    /**
     * Sent by the server to synchronize/update entity properties as NBT, an alternative to Set Entity Data.
     */
    export interface packet_sync_entity_property {
        nbt: nbt;
    }

    /**
     * AddVolumeEntity sends a volume entity's definition and components from server to client.
     */
    export interface packet_add_volume_entity {
        /** EntityRuntimeID is the runtime ID of the entity. The runtime ID is unique for each world session, and entities are generally identified in packets using this runtime ID. */
        runtime_id: number;
        /** EntityMetadata is a map of entity metadata, which includes flags and data properties that alter in particular the way the entity looks. */
        nbt: nbt;
        encoding_identifier: string;
        instance_name: string;
        bounds: any;
        dimension: number;
        engine_version: string;
    }

    /**
     * RemoveVolumeEntity indicates a volume entity to be removed from server to client.
     */
    export interface packet_remove_volume_entity {
        /** The Runtime Entity ID */
        entity_id: number;
    }

    /**
     * SimulationType is an in-progress packet. We currently do not know the use case.
     */
    export interface packet_simulation_type {
        /** SimulationType is the simulation type selected */
        type: any;
    }

    /**
     * NPCDialogue is a packet that allows the client to display dialog boxes for interacting with NPCs.
     */
    export interface packet_npc_dialogue {
        /** ActorUniqueID is the ID of the NPC being requested. */
        entity_id: bigint;
        /** ActionType is the type of action for the packet. */
        action_type: any;
        /** Dialogue is the text that the client should see. */
        dialogue: string;
        /** SceneName is the scene the data was pulled from for the client. */
        screen_name: string;
        /** NPCName is the name of the NPC to be displayed to the client. */
        npc_name: string;
        /** ActionJSON is the JSON string of the buttons/actions the server can perform. */
        action_json: string;
    }

    export interface packet_edu_uri_resource_packet {
        resource: EducationSharedResourceURI;
    }

    /**
     * CreatePhoto is a packet that allows players to export photos from their portfolios into items in their inventory.
     * This packet only works on the Education Edition version of Minecraft.
     */
    export interface packet_create_photo {
        /** EntityUniqueID is the unique ID of the entity. */
        entity_unique_id: bigint;
        /** PhotoName is the name of the photo. */
        photo_name: string;
        /** ItemName is the name of the photo as an item. */
        item_name: string;
    }

    /**
     * UpdateSubChunkBlocks is essentially just UpdateBlock packet, however for a set of blocks in a sub chunk.
     */
    export interface packet_update_subchunk_blocks {
        /** SubChunkX, SubChunkY, and SubChunkZ help identify the sub chunk. */
        x: number;
        y: number;
        z: number;
        /** Blocks contains each updated block change entry. */
        blocks: any;
        /** Extra contains each updated block change entry for the second layer, usually for waterlogged blocks. */
        extra: any;
    }

    export interface packet_photo_info_request {
        photo_id: number;
    }

    export enum HeightMapDataType {
        no_data = "no_data",
        has_data = "has_data",
        too_high = "too_high",
        too_low = "too_low",
        all_copied = "all_copied"
    }

    export interface SubChunkEntryWithoutCaching {
        dx: number;
        dy: number;
        dz: number;
        result: any;
        /** Payload has the terrain data, if the chunk isn't empty and caching is disabled */
        payload: Buffer;
        heightmap_type: HeightMapDataType;
        heightmap: any;
        render_heightmap_type: HeightMapDataType;
        render_heightmap: any;
    }
    export interface SubChunkEntryWithoutCaching extends Array<SubChunkEntryWithoutCaching> {
        countType: number;
    }

    export interface SubChunkEntryWithCaching {
        dx: number;
        dy: number;
        dz: number;
        result: any;
        /** Payload has the terrain data, if the chunk isn't empty and caching is disabled */
        payload: any;
        heightmap_type: HeightMapDataType;
        heightmap: any;
        render_heightmap_type: HeightMapDataType;
        render_heightmap: any;
        blob_id: bigint;
    }
    export interface SubChunkEntryWithCaching extends Array<SubChunkEntryWithCaching> {
        countType: number;
    }

    /**
     * SubChunk sends data about multiple sub-chunks around a center point.
     */
    export interface packet_subchunk {
        cache_enabled: boolean;
        dimension: number;
        /** Origin point */
        origin: vec3i;
        entries: any;
    }

    export interface packet_subchunk_request {
        dimension: number;
        /** Origin point */
        origin: vec3i;
        requests: any;
    }

    /**
     * ClientStartItemCooldown is sent by the client to the server to initiate a cooldown on an item. The purpose of this
     * packet isn't entirely clear.
     */
    export interface packet_client_start_item_cooldown {
        category: string;
        /** Duration is the duration of ticks the cooldown should last. */
        duration: number;
    }

    /**
     * ScriptMessage is used to communicate custom messages from the client to the server, or from the server to the client.
     * While the name may suggest this packet is used for the discontinued scripting API, it is likely instead for the
     * GameTest framework.
     */
    export interface packet_script_message {
        /** Message ID is the identifier of the message, used by either party to identify the message data sent. */
        message_id: string;
        /** Data contains the data of the message. */
        data: string;
    }

    /**
     * CodeBuilderSource is an Education Edition packet sent by the client to the server to run an operation with a
     */
    export interface packet_code_builder_source {
        /** Operation is used to distinguish the operation performed. It is always one of the constants listed above. */
        operation: any;
        /** Category is used to distinguish the category of the operation performed. It is always one of the constants */
        category: any;
        code_status: any;
    }

    /**
     * TickingAreasLoadStatus is sent by the server to the client to notify the client of a ticking area's loading status.
     */
    export interface packet_ticking_areas_load_status {
        /** Preload is true if the server is waiting for the area's preload. */
        preload: boolean;
    }

    /**
     * DimensionData is a packet sent from the server to the client containing information about data-driven dimensions
     * that the server may have registered. This packet does not seem to be sent by default, rather only being sent when
     * any data-driven dimensions are registered.
     */
    export interface packet_dimension_data {
        definitions: any;
    }

    /**
     * AgentAction is an Education Edition packet sent from the server to the client to return a response to a
     * previously requested action.
     */
    export interface packet_agent_action {
        request_id: string;
        action_type: any;
        body: string;
    }

    /**
     * ChangeMobProperty is a packet sent from the server to the client to change one of the properties of a mob client-side.
     */
    export interface packet_change_mob_property {
        /** EntityUniqueID is the unique ID of the entity whose property is being changed. */
        entity_unique_id: number;
        /** Property is the name of the property being updated. */
        property: string;
        /** BoolValue is set if the property value is a bool type. If the type is not a bool, this field is ignored. */
        bool_value: boolean;
        /** StringValue is set if the property value is a string type. If the type is not a string, this field is ignored. */
        string_value: string;
        /** IntValue is set if the property value is an int type. If the type is not an int, this field is ignored. */
        int_value: number;
        /** FloatValue is set if the property value is a float type. If the type is not a float, this field is ignored. */
        float_value: number;
    }

    /**
     * LessonProgress is a packet sent by the server to the client to inform the client of updated progress on a lesson.
     * This packet only functions on the Minecraft: Education Edition version of the game.
     */
    export interface packet_lesson_progress {
        /** Action is the action the client should perform to show progress. This is one of the constants defined above. */
        action: number;
        /** Score is the score the client should use when displaying the progress. */
        score: number;
        /** Identifier is the identifier of the lesson that is being progressed. */
        identifier: string;
    }

    /**
     * RequestAbility is a packet sent by the client to the server to request permission for a specific ability from the
     * server.
     */
    export interface packet_request_ability {
        /** Ability is the ability that the client is requesting. This is one of the constants defined above. */
        ability: any;
        /** Value type decides which of the fields you should read/write from */
        value_type: any;
        /** If value type is bool, use this value */
        bool_value: boolean;
        /** If value type is float, use this value */
        float_val: number;
    }

    /**
     * RequestPermissions is a packet sent from the client to the server to request permissions that the client does not
     * currently have. It can only be sent by operators and host in vanilla Minecraft.
     */
    export interface packet_request_permissions {
        /** EntityUniqueID is the unique ID of the player. The unique ID is unique for the entire world and is often used in packets. Most servers send an EntityUniqueID equal to the EntityRuntimeID. */
        entity_unique_id: bigint;
        /** PermissionLevel is the current permission level of the player. Same as constants in AdventureSettings packet. */
        permission_level: PermissionLevel;
        /** RequestedPermissions contains the requested permission flags. */
        requested_permissions: RequestPermissions;
    }

    export type RequestPermissions = any; // TODO: Implement type: bitflags

    /**
     * ToastRequest is a packet sent from the server to the client to display a toast to the top of the screen. These toasts
     * are the same as the ones seen when, for example, loading a new resource pack or obtaining an achievement.
     */
    export interface packet_toast_request {
        /** Title is the title of the toast. */
        title: string;
        /** Message is the message that the toast may contain alongside the title. */
        message: string;
    }

    /**
     * UpdateAbilities is a packet sent from the server to the client to update the abilities of the player. It, along with
     * the UpdateAdventureSettings packet, are replacements of the AdventureSettings packet since v1.19.10.
     */
    export interface packet_update_abilities {
        /** EntityUniqueID is the unique ID of the player. The unique ID is a value that remains consistent across different sessions of the same world, but most servers simply fill the runtime ID of the entity out for this field. */
        entity_unique_id: bigint;
        /** PlayerPermissions is the permission level of the player. It is a value from 0-3, with 0 being visitor, 1 being member, 2 being operator and 3 being custom. */
        permission_level: PermissionLevel;
        /** CommandPermissions is a permission level that specifies the kind of commands that the player is allowed to use. It is one of the CommandPermissionLevel constants in the AdventureSettings packet. */
        command_permission: CommandPermissionLevel;
        /** Layers contains all ability layers and their potential values. This should at least have one entry, being the base layer. */
        abilities: any;
    }

    /**
     * UpdateAdventureSettings is a packet sent from the server to the client to update the adventure settings of the player.
     * It, along with the UpdateAbilities packet, are replacements of the AdventureSettings packet since v1.19.10.
     */
    export interface packet_update_adventure_settings {
        /** NoPvM is a boolean indicating whether the player is allowed to fight mobs or not. */
        no_pvm: boolean;
        /** NoMvP is a boolean indicating whether mobs are allowed to fight the player or not. It is unclear why this is sent to the client. */
        no_mvp: boolean;
        /** ImmutableWorld is a boolean indicating whether the player is allowed to modify the world or not. */
        immutable_world: boolean;
        /** ShowNameTags is a boolean indicating whether player name tags are shown or not. */
        show_name_tags: boolean;
        /** AutoJump is a boolean indicating whether the player is allowed to jump automatically or not. */
        auto_jump: boolean;
    }

    /**
     * DeathInfo is a packet sent from the server to the client expected to be sent when a player dies. It contains messages
     * related to the player's death, which are shown on the death screen as of v1.19.10.
     */
    export interface packet_death_info {
        /** Cause is the cause of the player's death, such as "suffocation" or "suicide". */
        cause: string;
        /** Messages is a list of death messages to be shown on the death screen. */
        messages: any;
    }

    /**
     * EditorNetwork is a packet sent from the server to the client and vise-versa to communicate editor-mode related
     * information. It carries a single compound tag containing the relevant information.
     */
    export interface packet_editor_network {
        route_to_manager: boolean;
        /** Payload is a network little endian compound tag holding data relevant to the editor. */
        payload: nbt;
    }

    /**
     * FeatureRegistry is a packet used to notify the client about the world generation features the server is currently
     * using. This is used in combination with the client-side world generation system introduced in v1.19.20, allowing the
     * client to completely generate the chunks of the world without having to rely on the server.
     */
    export interface packet_feature_registry {
        /** Features is a slice of all registered world generation features. */
        features: any;
    }

    /**
     * ServerStats is a packet sent from the server to the client to update the client on server statistics. It is purely
     * used for telemetry.
     */
    export interface packet_server_stats {
        server_time: number;
        network_time: number;
    }

    export interface packet_request_network_settings {
        client_protocol: number;
    }

    export interface packet_game_test_request {
        /** MaxTestsPerBatch ... */
        max_tests_per_batch: number;
        /** Repetitions represents the amount of times the test will be run. */
        repetitions: number;
        /** Rotation represents the rotation of the test. It is one of the constants above. */
        rotation: any;
        /** StopOnError indicates whether the test should immediately stop when an error is encountered. */
        stop_on_error: boolean;
        /** Position is the position at which the test will be performed. */
        position: BlockCoordinates;
        /** TestsPerRow ... */
        tests_per_row: number;
        /** Name represents the name of the test. */
        name: string;
    }

    /**
     * GameTestResults is a packet sent in response to the GameTestRequest packet, with a boolean indicating whether the
     * test was successful or not, and an error string if the test failed.
     */
    export interface packet_game_test_results {
        /** Succeeded indicates whether the test succeeded or not. */
        succeeded: boolean;
        /** Error is the error that occurred. If Succeeded is true, this field is empty. */
        error: string;
        /** Name represents the name of the test. */
        name: string;
    }

    export type InputLockFlags = any; // TODO: Implement type: bitflags

    export interface packet_update_client_input_locks {
        /** Locks is an encoded bitset of all locks that are currently active. The locks are defined in the constants above. */
        locks: InputLockFlags;
        /** Position is the server's position of the client at the time the packet was sent. It is unclear what the exact purpose of this field is. */
        position: vec3f;
    }

    /**
     * Deprecated: ClientCheatAbility is deprecated as of 1.20.10.
     */
    export interface packet_client_cheat_ability {
        /** EntityUniqueID is the unique ID of the player. The unique ID is a value that remains consistent across different sessions of the same world, but most servers simply fill the runtime ID of the entity out for this field. */
        entity_unique_id: bigint;
        /** PlayerPermissions is the permission level of the player. It is a value from 0-3, with 0 being visitor, 1 being member, 2 being operator and 3 being custom. */
        permission_level: PermissionLevel;
        /** CommandPermissions is a permission level that specifies the kind of commands that the player is allowed to use. It is one of the CommandPermissionLevel constants in the AdventureSettings packet. */
        command_permission: CommandPermissionLevel;
        /** Layers contains all ability layers and their potential values. This should at least have one entry, being the base layer. */
        abilities: any;
    }

    /**
     * camera_presets gives the client a list of custom camera presets.
     */
    export interface packet_camera_presets {
        presets: any;
    }

    /**
     * unlocked_recipes gives the client a list of recipes that have been unlocked, restricting the recipes that appear in
     * the recipe book.
     */
    export interface packet_unlocked_recipes {
        /** new_unlocks determines if new recipes have been unlocked since the packet was last sent. */
        unlock_type: any;
        /** Recipes is a list of recipe names that have been unlocked. */
        recipes: any;
    }

    /**
     * camera_instruction gives a custom camera specific instructions to operate.
     */
    export interface packet_camera_instruction {
        instruction_set: any | undefined;
        clear: boolean | undefined;
        fade: any | undefined;
        target: any | undefined;
        remove_target: boolean | undefined;
    }

    /**
     * Removed in 1.21.80
     */
    export interface packet_compressed_biome_definitions {
        /** via PMMP: This packet is only sent by the server when client-side chunk generation is enabled in vanilla. It contains NBT data for biomes, similar to the BiomeDefinitionListPacket, but with a large amount of extra data for client-side chunk generation.  The data is compressed with a cursed home-brewed compression format, and it's a miracle it even works. */
        raw_payload: Buffer;
    }

    export interface packet_trim_data {
        patterns: any;
        materials: any;
    }

    export interface packet_open_sign {
        position: BlockCoordinates;
        is_front: boolean;
    }

    /**
     * agent_animation is an Education Edition packet sent from the server to the client to make an agent perform an animation.
     */
    export interface packet_agent_animation {
        /** animation is the ID of the animation that the agent should perform. As of its implementation, there are no IDs that can be used in the regular client. */
        animation: any;
        /** entity_runtime_id is the runtime ID of the entity. The runtime ID is unique for each world session, and entities are generally identified in packets using this runtime ID. */
        entity_runtime_id: number;
    }

    /**
     * RefreshEntitlements is sent by the client to the server to refresh the entitlements of the player.
     */
    export interface packet_refresh_entitlements {
    }

    export interface packet_toggle_crafter_slot_request {
        position: vec3li;
        slot: number;
        disabled: boolean;
    }

    export interface packet_set_player_inventory_options {
        left_tab: any;
        right_tab: any;
        filtering: boolean;
        layout: any;
        crafting_layout: any;
    }

    /**
     * SetHud is sent by the server to set the visibility of individual HUD elements on the client. It is
     * important to note that the client does not reset the state of the HUD elements after it leaves a server,
     * meaning they can leak into sessions on different servers. To be safe, you should reset the visibility of
     * all HUD elements when a player connects.
     */
    export interface packet_set_hud {
        /** Elements is a list of HUD elements that are being modified. The values can be any of the HudElement constants above. */
        elements: any;
        /** Visibility represents the new visibility of the specified Elements. It can be any of the HudVisibility constants above. */
        visibility: any;
    }

    export enum Element {
        PaperDoll = "PaperDoll",
        Armour = "Armour",
        ToolTips = "ToolTips",
        TouchControls = "TouchControls",
        Crosshair = "Crosshair",
        HotBar = "HotBar",
        Health = "Health",
        ProgressBar = "ProgressBar",
        Hunger = "Hunger",
        AirBubbles = "AirBubbles",
        VehicleHealth = "VehicleHealth",
        EffectsBar = "EffectsBar",
        ItemTextPopup = "ItemTextPopup"
    }

    export interface packet_award_achievement {
        achievement_id: number;
    }

    export interface packet_server_post_move {
        position: vec3f;
    }

    /**
     * clientbound_close_form is sent by the server to clear the entire form stack of the client. This means that all
     * forms that are currently open will be closed. This does not affect inventories and other containers.
     */
    export interface packet_clientbound_close_form {
    }

    /**
     * ServerBoundLoadingScreen is sent by the client to tell the server about the state of the loading
     * screen that the client is currently displaying.
     */
    export interface packet_serverbound_loading_screen {
        /** The type of the loading screen event. */
        type: number;
        loading_screen_id: number | undefined;
    }

    /**
     * JigsawStructureData is sent by the server to let the client know all the rules for jigsaw structures.
     */
    export interface packet_jigsaw_structure_data {
        /** StructureData is a network NBT serialised compound of all the jigsaw structure rules defined on the server. */
        structure_data: nbt;
    }

    /**
     * CurrentStructureFeature is sent by the server to let the client know the name of the structure feature
     * that the player is currently occupying.
     */
    export interface packet_current_structure_feature {
        /** CurrentFeature is the identifier of the structure feature that the player is currently occupying. If the player is not occupying any structure feature, this field is empty. */
        current_feature: string;
    }

    /**
     * ServerBoundDiagnostics is sent by the client to tell the server about the performance diagnostics
     * of the client. It is sent by the client roughly every 500ms or 10 in-game ticks when the
     * "Creator > Enable Client Diagnostics" setting is enabled.
     */
    export interface packet_serverbound_diagnostics {
        average_frames_per_second: number;
        average_server_sim_tick_time: number;
        average_client_sim_tick_time: number;
        average_begin_frame_time: number;
        average_input_time: number;
        average_render_time: number;
        average_end_frame_time: number;
        average_remainder_time_percent: number;
        average_unaccounted_time_percent: number;
    }

    /**
     * CameraAimAssist is sent by the server to the client to set up aim assist for the client's camera.
     */
    export interface packet_camera_aim_assist {
        /** Preset is the ID of the preset that has previously been defined in the CameraAimAssistPresets packet. */
        preset_id: string;
        /** CameraAimAssistTargetModeAngle. */
        view_angle: vec2f;
        /** Distance is the distance that the camera should keep from the target, if TargetMode is set to CameraAimAssistTargetModeDistance. */
        distance: number;
        /** TargetMode is the mode that the camera should use to aim at the target. This is one of the constants below. */
        target_mode: any;
        /** Action is the action that should be performed with the aim assist. This is one of the constants above. */
        action: any;
    }

    /**
     * ContainerRegistryCleanup is sent by the server to trigger a client-side cleanup of the dynamic container registry.
     */
    export interface packet_container_registry_cleanup {
        /** RemovedContainers is a list of protocol.FullContainerName's that should be removed from the client-side container registry. */
        removed_containers: any;
    }

    /**
     * movement_effect is sent by the server to the client to update specific movement effects to allow the client
     * to predict its movement. For example, fireworks used during gliding will send this packet to tell the
     * client the exact duration of the boost.
     */
    export interface packet_movement_effect {
        /** runtime_id is the runtime ID of the entity. The runtime ID is unique for each world session, and entities are generally identified in packets using this runtime ID. */
        runtime_id: number;
        /** effect_type is the type of movement effect being updated. */
        effect_type: MovementEffectType;
        /** effect_duration is the duration of the effect, measured in ticks. */
        effect_duration: number;
        /** tick is the server tick at which the packet was sent. It is used in relation to CorrectPlayerMovePrediction. */
        tick: number;
    }

    /**
     * set_movement_authority is sent by the server to the client to change its movement mode.
     * This packet has been deprecated and as of protocol 818 (1.21.90) has been removed from the game.
     */
    export interface packet_set_movement_authority {
        /** movement_authority specifies the way the server handles player movement. Available options are PlayerMovementModeClient, PlayerMovementModeServer and PlayerMovementModeServerWithRewind, where the server authoritative types result in the client sending PlayerAuthInput packets instead of MovePlayer packets and the rewind mode requires sending the tick of movement and several actions. */
        movement_authority: any;
    }

    /**
     * CameraAimAssistPresets is sent by the server to the client to provide a list of categories and presets
     * that can be used when sending a CameraAimAssist packet or a CameraInstruction including aim assist.
     */
    export interface packet_camera_aim_assist_presets {
        /** CategoryGroups is a list of groups of categories which can be referenced by one of the Presets. */
        categories: any;
        presets: any;
        operation: any;
    }

    export interface packet_client_camera_aim_assist {
        /** !bound: client */
        preset_id: string;
        action: any;
        allow_aim_assist: boolean;
    }

    export interface packet_client_movement_prediction_sync {
        /** !bound: ? */
        data_flags: bigint;
        bounding_box: any;
        movement_speed: number;
        underwater_movement_speed: number;
        lava_movement_speed: number;
        jump_strength: number;
        health: number;
        hunger: number;
        entity_runtime_id: number;
        is_flying: boolean;
    }

    export interface packet_update_client_options {
        graphics_mode: any | undefined;
    }

    /**
     * PlayerVideoCapturePacket is sent by the server to start or stop video recording for a player. This packet
     * only works on development builds and has no effect on retail builds. When recording, the client will save
     * individual frames to '/LocalCache/minecraftpe' in the format specified below.
     */
    export interface packet_player_video_capture {
        /** action is the action that the client should perform. This is one of the constants defined above. */
        action: any;
        undefined: any;
    }

    /**
     * PlayerUpdateEntityOverrides is sent by the server to modify an entity's properties individually.
     */
    export interface packet_player_update_entity_overrides {
        /** EntityRuntimeID is the runtime ID of the entity. The runtime ID is unique for each world session, and entities are generally identified in packets using this runtime ID. */
        runtime_id: number;
        /** PropertyIndex is the index of the property to modify. The index is unique for each property of an entity. */
        property_index: number;
        /** Type is the type of action to perform with the property. It is one of the constants above. */
        type: any;
        value: any;
    }

    export interface packet_player_location {
        /** Type is the action that is being performed. It is one of the constants above. */
        type: any;
        entity_unique_id: number;
        position: any;
    }

    export interface packet_clientbound_controls_scheme {
        /** Scheme is the scheme that the client should use. It is one of the constants above. */
        scheme: any;
    }

    export interface packet_server_script_debug_drawer {
        shapes: any;
    }


}
