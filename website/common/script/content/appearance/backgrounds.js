import forOwn from 'lodash/forOwn';
import t from '../translation';

/* eslint-disable camelcase */
const backgrounds = {
  backgrounds062014: {
    beach: {
      text: t('backgroundBeachText'),
      notes: t('backgroundBeachNotes'),
    },
    fairy_ring: {
      text: t('backgroundFairyRingText'),
      notes: t('backgroundFairyRingNotes'),
    },
    forest: {
      text: t('backgroundForestText'),
      notes: t('backgroundForestNotes'),
    },
  },
  backgrounds072014: {
    open_waters: {
      text: t('backgroundOpenWatersText'),
      notes: t('backgroundOpenWatersNotes'),
    },
    coral_reef: {
      text: t('backgroundCoralReefText'),
      notes: t('backgroundCoralReefNotes'),
    },
    seafarer_ship: {
      text: t('backgroundSeafarerShipText'),
      notes: t('backgroundSeafarerShipNotes'),
    },
  },
  backgrounds082014: {
    volcano: {
      text: t('backgroundVolcanoText'),
      notes: t('backgroundVolcanoNotes'),
    },
    clouds: {
      text: t('backgroundCloudsText'),
      notes: t('backgroundCloudsNotes'),
    },
    dusty_canyons: {
      text: t('backgroundDustyCanyonsText'),
      notes: t('backgroundDustyCanyonsNotes'),
    },
  },
  backgrounds092014: {
    thunderstorm: {
      text: t('backgroundThunderstormText'),
      notes: t('backgroundThunderstormNotes'),
    },
    autumn_forest: {
      text: t('backgroundAutumnForestText'),
      notes: t('backgroundAutumnForestNotes'),
    },
    harvest_fields: {
      text: t('backgroundHarvestFieldsText'),
      notes: t('backgroundHarvestFieldsNotes'),
    },
  },
  backgrounds102014: {
    graveyard: {
      text: t('backgroundGraveyardText'),
      notes: t('backgroundGraveyardNotes'),
    },
    haunted_house: {
      text: t('backgroundHauntedHouseText'),
      notes: t('backgroundHauntedHouseNotes'),
    },
    pumpkin_patch: {
      text: t('backgroundPumpkinPatchText'),
      notes: t('backgroundPumpkinPatchNotes'),
    },
  },
  backgrounds112014: {
    harvest_feast: {
      text: t('backgroundHarvestFeastText'),
      notes: t('backgroundHarvestFeastNotes'),
    },
    sunset_meadow: {
      text: t('backgroundSunsetMeadowText'),
      notes: t('backgroundSunsetMeadowNotes'),
    },
    starry_skies: {
      text: t('backgroundStarrySkiesText'),
      notes: t('backgroundStarrySkiesNotes'),
    },
  },
  backgrounds122014: {
    iceberg: {
      text: t('backgroundIcebergText'),
      notes: t('backgroundIcebergNotes'),
    },
    twinkly_lights: {
      text: t('backgroundTwinklyLightsText'),
      notes: t('backgroundTwinklyLightsNotes'),
    },
    south_pole: {
      text: t('backgroundSouthPoleText'),
      notes: t('backgroundSouthPoleNotes'),
    },
  },
  backgrounds012015: {
    ice_cave: {
      text: t('backgroundIceCaveText'),
      notes: t('backgroundIceCaveNotes'),
    },
    frigid_peak: {
      text: t('backgroundFrigidPeakText'),
      notes: t('backgroundFrigidPeakNotes'),
    },
    snowy_pines: {
      text: t('backgroundSnowyPinesText'),
      notes: t('backgroundSnowyPinesNotes'),
    },
  },
  backgrounds022015: {
    blacksmithy: {
      text: t('backgroundBlacksmithyText'),
      notes: t('backgroundBlacksmithyNotes'),
    },
    crystal_cave: {
      text: t('backgroundCrystalCaveText'),
      notes: t('backgroundCrystalCaveNotes'),
    },
    distant_castle: {
      text: t('backgroundDistantCastleText'),
      notes: t('backgroundDistantCastleNotes'),
    },
  },
  backgrounds032015: {
    spring_rain: {
      text: t('backgroundSpringRainText'),
      notes: t('backgroundSpringRainNotes'),
    },
    stained_glass: {
      text: t('backgroundStainedGlassText'),
      notes: t('backgroundStainedGlassNotes'),
    },
    rolling_hills: {
      text: t('backgroundRollingHillsText'),
      notes: t('backgroundRollingHillsNotes'),
    },
  },
  backgrounds042015: {
    cherry_trees: {
      text: t('backgroundCherryTreesText'),
      notes: t('backgroundCherryTreesNotes'),
    },
    floral_meadow: {
      text: t('backgroundFloralMeadowText'),
      notes: t('backgroundFloralMeadowNotes'),
    },
    gumdrop_land: {
      text: t('backgroundGumdropLandText'),
      notes: t('backgroundGumdropLandNotes'),
    },
  },
  backgrounds052015: {
    marble_temple: {
      text: t('backgroundMarbleTempleText'),
      notes: t('backgroundMarbleTempleNotes'),
    },
    mountain_lake: {
      text: t('backgroundMountainLakeText'),
      notes: t('backgroundMountainLakeNotes'),
    },
    pagodas: {
      text: t('backgroundPagodasText'),
      notes: t('backgroundPagodasNotes'),
    },
  },
  backgrounds062015: {
    drifting_raft: {
      text: t('backgroundDriftingRaftText'),
      notes: t('backgroundDriftingRaftNotes'),
    },
    shimmery_bubbles: {
      text: t('backgroundShimmeryBubblesText'),
      notes: t('backgroundShimmeryBubblesNotes'),
    },
    island_waterfalls: {
      text: t('backgroundIslandWaterfallsText'),
      notes: t('backgroundIslandWaterfallsNotes'),
    },
  },
  backgrounds072015: {
    dilatory_ruins: {
      text: t('backgroundDilatoryRuinsText'),
      notes: t('backgroundDilatoryRuinsNotes'),
    },
    giant_wave: {
      text: t('backgroundGiantWaveText'),
      notes: t('backgroundGiantWaveNotes'),
    },
    sunken_ship: {
      text: t('backgroundSunkenShipText'),
      notes: t('backgroundSunkenShipNotes'),
    },
  },
  backgrounds082015: {
    pyramids: {
      text: t('backgroundPyramidsText'),
      notes: t('backgroundPyramidsNotes'),
    },
    sunset_savannah: {
      text: t('backgroundSunsetSavannahText'),
      notes: t('backgroundSunsetSavannahNotes'),
    },
    twinkly_party_lights: {
      text: t('backgroundTwinklyPartyLightsText'),
      notes: t('backgroundTwinklyPartyLightsNotes'),
    },
  },
  backgrounds092015: {
    market: {
      text: t('backgroundMarketText'),
      notes: t('backgroundMarketNotes'),
    },
    stable: {
      text: t('backgroundStableText'),
      notes: t('backgroundStableNotes'),
    },
    tavern: {
      text: t('backgroundTavernText'),
      notes: t('backgroundTavernNotes'),
    },
  },
  backgrounds102015: {
    harvest_moon: {
      text: t('backgroundHarvestMoonText'),
      notes: t('backgroundHarvestMoonNotes'),
    },
    slimy_swamp: {
      text: t('backgroundSlimySwampText'),
      notes: t('backgroundSlimySwampNotes'),
    },
    swarming_darkness: {
      text: t('backgroundSwarmingDarknessText'),
      notes: t('backgroundSwarmingDarknessNotes'),
    },
  },
  backgrounds112015: {
    floating_islands: {
      text: t('backgroundFloatingIslandsText'),
      notes: t('backgroundFloatingIslandsNotes'),
    },
    night_dunes: {
      text: t('backgroundNightDunesText'),
      notes: t('backgroundNightDunesNotes'),
    },
    sunset_oasis: {
      text: t('backgroundSunsetOasisText'),
      notes: t('backgroundSunsetOasisNotes'),
    },
  },
  backgrounds122015: {
    alpine_slopes: {
      text: t('backgroundAlpineSlopesText'),
      notes: t('backgroundAlpineSlopesNotes'),
    },
    snowy_sunrise: {
      text: t('backgroundSnowySunriseText'),
      notes: t('backgroundSnowySunriseNotes'),
    },
    winter_town: {
      text: t('backgroundWinterTownText'),
      notes: t('backgroundWinterTownNotes'),
    },
  },
  backgrounds012016: {
    frozen_lake: {
      text: t('backgroundFrozenLakeText'),
      notes: t('backgroundFrozenLakeNotes'),
    },
    snowman_army: {
      text: t('backgroundSnowmanArmyText'),
      notes: t('backgroundSnowmanArmyNotes'),
    },
    winter_night: {
      text: t('backgroundWinterNightText'),
      notes: t('backgroundWinterNightNotes'),
    },
  },
  backgrounds022016: {
    bamboo_forest: {
      text: t('backgroundBambooForestText'),
      notes: t('backgroundBambooForestNotes'),
    },
    cozy_library: {
      text: t('backgroundCozyLibraryText'),
      notes: t('backgroundCozyLibraryNotes'),
    },
    grand_staircase: {
      text: t('backgroundGrandStaircaseText'),
      notes: t('backgroundGrandStaircaseNotes'),
    },
  },
  backgrounds032016: {
    deep_mine: {
      text: t('backgroundDeepMineText'),
      notes: t('backgroundDeepMineNotes'),
    },
    rainforest: {
      text: t('backgroundRainforestText'),
      notes: t('backgroundRainforestNotes'),
    },
    stone_circle: {
      text: t('backgroundStoneCircleText'),
      notes: t('backgroundStoneCircleNotes'),
    },
  },
  backgrounds042016: {
    archery_range: {
      text: t('backgroundArcheryRangeText'),
      notes: t('backgroundArcheryRangeNotes'),
    },
    giant_florals: {
      text: t('backgroundGiantFlowersText'),
      notes: t('backgroundGiantFlowersNotes'),
    },
    rainbows_end: {
      text: t('backgroundRainbowsEndText'),
      notes: t('backgroundRainbowsEndNotes'),
    },
  },
  backgrounds052016: {
    beehive: {
      text: t('backgroundBeehiveText'),
      notes: t('backgroundBeehiveNotes'),
    },
    gazebo: {
      text: t('backgroundGazeboText'),
      notes: t('backgroundGazeboNotes'),
    },
    tree_roots: {
      text: t('backgroundTreeRootsText'),
      notes: t('backgroundTreeRootsNotes'),
    },
  },
  backgrounds062016: {
    lighthouse_shore: {
      text: t('backgroundLighthouseShoreText'),
      notes: t('backgroundLighthouseShoreNotes'),
    },
    lilypad: {
      text: t('backgroundLilypadText'),
      notes: t('backgroundLilypadNotes'),
    },
    waterfall_rock: {
      text: t('backgroundWaterfallRockText'),
      notes: t('backgroundWaterfallRockNotes'),
    },
  },
  backgrounds072016: {
    aquarium: {
      text: t('backgroundAquariumText'),
      notes: t('backgroundAquariumNotes'),
    },
    dilatory_castle: {
      text: t('backgroundDilatoryCastleText'),
      notes: t('backgroundDilatoryCastleNotes'),
    },
    deep_sea: {
      text: t('backgroundDeepSeaText'),
      notes: t('backgroundDeepSeaNotes'),
    },
  },
  backgrounds082016: {
    idyllic_cabin: {
      text: t('backgroundIdyllicCabinText'),
      notes: t('backgroundIdyllicCabinNotes'),
    },
    mountain_pyramid: {
      text: t('backgroundMountainPyramidText'),
      notes: t('backgroundMountainPyramidNotes'),
    },
    stormy_ship: {
      text: t('backgroundStormyShipText'),
      notes: t('backgroundStormyShipNotes'),
    },
  },
  backgrounds092016: {
    cornfields: {
      text: t('backgroundCornfieldsText'),
      notes: t('backgroundCornfieldsNotes'),
    },
    farmhouse: {
      text: t('backgroundFarmhouseText'),
      notes: t('backgroundFarmhouseNotes'),
    },
    orchard: {
      text: t('backgroundOrchardText'),
      notes: t('backgroundOrchardNotes'),
    },
  },
  backgrounds102016: {
    rainy_city: {
      text: t('backgroundRainyCityText'),
      notes: t('backgroundRainyCityNotes'),
    },
    spider_web: {
      text: t('backgroundSpiderWebText'),
      notes: t('backgroundSpiderWebNotes'),
    },
    strange_sewers: {
      text: t('backgroundStrangeSewersText'),
      notes: t('backgroundStrangeSewersNotes'),
    },
  },
  backgrounds112016: {
    midnight_clouds: {
      text: t('backgroundMidnightCloudsText'),
      notes: t('backgroundMidnightCloudsNotes'),
    },
    stormy_rooftops: {
      text: t('backgroundStormyRooftopsText'),
      notes: t('backgroundStormyRooftopsNotes'),
    },
    windy_autumn: {
      text: t('backgroundWindyAutumnText'),
      notes: t('backgroundWindyAutumnNotes'),
    },
  },
  backgrounds122016: {
    shimmering_ice_prism: {
      text: t('backgroundShimmeringIcePrismText'),
      notes: t('backgroundShimmeringIcePrismNotes'),
    },
    winter_fireworks: {
      text: t('backgroundWinterFireworksText'),
      notes: t('backgroundWinterFireworksNotes'),
    },
    winter_storefront: {
      text: t('backgroundWinterStorefrontText'),
      notes: t('backgroundWinterStorefrontNotes'),
    },
  },
  backgrounds012017: {
    blizzard: {
      text: t('backgroundBlizzardText'),
      notes: t('backgroundBlizzardNotes'),
    },
    sparkling_snowflake: {
      text: t('backgroundSparklingSnowflakeText'),
      notes: t('backgroundSparklingSnowflakeNotes'),
    },
    stoikalm_volcanoes: {
      text: t('backgroundStoikalmVolcanoesText'),
      notes: t('backgroundStoikalmVolcanoesNotes'),
    },
  },
  backgrounds022017: {
    bell_tower: {
      text: t('backgroundBellTowerText'),
      notes: t('backgroundBellTowerNotes'),
    },
    treasure_room: {
      text: t('backgroundTreasureRoomText'),
      notes: t('backgroundTreasureRoomNotes'),
    },
    wedding_arch: {
      text: t('backgroundWeddingArchText'),
      notes: t('backgroundWeddingArchNotes'),
    },
  },
  backgrounds032017: {
    magic_beanstalk: {
      text: t('backgroundMagicBeanstalkText'),
      notes: t('backgroundMagicBeanstalkNotes'),
    },
    meandering_cave: {
      text: t('backgroundMeanderingCaveText'),
      notes: t('backgroundMeanderingCaveNotes'),
    },
    mistiflying_circus: {
      text: t('backgroundMistiflyingCircusText'),
      notes: t('backgroundMistiflyingCircusNotes'),
    },
  },
  backgrounds042017: {
    bug_covered_log: {
      text: t('backgroundBugCoveredLogText'),
      notes: t('backgroundBugCoveredLogNotes'),
    },
    giant_birdhouse: {
      text: t('backgroundGiantBirdhouseText'),
      notes: t('backgroundGiantBirdhouseNotes'),
    },
    mist_shrouded_mountain: {
      text: t('backgroundMistShroudedMountainText'),
      notes: t('backgroundMistShroudedMountainNotes'),
    },
  },
  backgrounds052017: {
    guardian_statues: {
      text: t('backgroundGuardianStatuesText'),
      notes: t('backgroundGuardianStatuesNotes'),
    },
    habit_city_streets: {
      text: t('backgroundHabitCityStreetsText'),
      notes: t('backgroundHabitCityStreetsNotes'),
    },
    on_tree_branch: {
      text: t('backgroundOnATreeBranchText'),
      notes: t('backgroundOnATreeBranchNotes'),
    },
  },
  backgrounds062017: {
    buried_treasure: {
      text: t('backgroundBuriedTreasureText'),
      notes: t('backgroundBuriedTreasureNotes'),
    },
    ocean_sunrise: {
      text: t('backgroundOceanSunriseText'),
      notes: t('backgroundOceanSunriseNotes'),
    },
    sandcastle: {
      text: t('backgroundSandcastleText'),
      notes: t('backgroundSandcastleNotes'),
    },
  },
  backgrounds072017: {
    giant_seashell: {
      text: t('backgroundGiantSeashellText'),
      notes: t('backgroundGiantSeashellNotes'),
    },
    kelp_forest: {
      text: t('backgroundKelpForestText'),
      notes: t('backgroundKelpForestNotes'),
    },
    midnight_lake: {
      text: t('backgroundMidnightLakeText'),
      notes: t('backgroundMidnightLakeNotes'),
    },
  },
  backgrounds082017: {
    back_of_giant_beast: {
      text: t('backgroundBackOfGiantBeastText'),
      notes: t('backgroundBackOfGiantBeastNotes'),
    },
    desert_dunes: {
      text: t('backgroundDesertDunesText'),
      notes: t('backgroundDesertDunesNotes'),
    },
    summer_fireworks: {
      text: t('backgroundSummerFireworksText'),
      notes: t('backgroundSummerFireworksNotes'),
    },
  },
  backgrounds092017: {
    beside_well: {
      text: t('backgroundBesideWellText'),
      notes: t('backgroundBesideWellNotes'),
    },
    garden_shed: {
      text: t('backgroundGardenShedText'),
      notes: t('backgroundGardenShedNotes'),
    },
    pixelists_workshop: {
      text: t('backgroundPixelistsWorkshopText'),
      notes: t('backgroundPixelistsWorkshopNotes'),
    },
  },
  backgrounds102017: {
    magical_candles: {
      text: t('backgroundMagicalCandlesText'),
      notes: t('backgroundMagicalCandlesNotes'),
    },
    spooky_hotel: {
      text: t('backgroundSpookyHotelText'),
      notes: t('backgroundSpookyHotelNotes'),
    },
    tar_pits: {
      text: t('backgroundTarPitsText'),
      notes: t('backgroundTarPitsNotes'),
    },
  },
  backgrounds112017: {
    fiber_arts_room: {
      text: t('backgroundFiberArtsRoomText'),
      notes: t('backgroundFiberArtsRoomNotes'),
    },
    midnight_castle: {
      text: t('backgroundMidnightCastleText'),
      notes: t('backgroundMidnightCastleNotes'),
    },
    tornado: {
      text: t('backgroundTornadoText'),
      notes: t('backgroundTornadoNotes'),
    },
  },
  backgrounds122017: {
    crosscountry_ski_trail: {
      text: t('backgroundCrosscountrySkiTrailText'),
      notes: t('backgroundCrosscountrySkiTrailNotes'),
    },
    starry_winter_night: {
      text: t('backgroundStarryWinterNightText'),
      notes: t('backgroundStarryWinterNightNotes'),
    },
    toymakers_workshop: {
      text: t('backgroundToymakersWorkshopText'),
      notes: t('backgroundToymakersWorkshopNotes'),
    },
  },
  backgrounds012018: {
    aurora: {
      text: t('backgroundAuroraText'),
      notes: t('backgroundAuroraNotes'),
    },
    driving_a_sleigh: {
      text: t('backgroundDrivingASleighText'),
      notes: t('backgroundDrivingASleighNotes'),
    },
    flying_over_icy_steppes: {
      text: t('backgroundFlyingOverIcySteppesText'),
      notes: t('backgroundFlyingOverIcySteppesNotes'),
    },
  },
  backgrounds022018: {
    chessboard_land: {
      text: t('backgroundChessboardLandText'),
      notes: t('backgroundChessboardLandNotes'),
    },
    magical_museum: {
      text: t('backgroundMagicalMuseumText'),
      notes: t('backgroundMagicalMuseumNotes'),
    },
    rose_garden: {
      text: t('backgroundRoseGardenText'),
      notes: t('backgroundRoseGardenNotes'),
    },
  },
  backgrounds032018: {
    driving_a_coach: {
      text: t('backgroundDrivingACoachText'),
      notes: t('backgroundDrivingACoachNotes'),
    },
    elegant_balcony: {
      text: t('backgroundElegantBalconyText'),
      notes: t('backgroundElegantBalconyNotes'),
    },
    gorgeous_greenhouse: {
      text: t('backgroundGorgeousGreenhouseText'),
      notes: t('backgroundGorgeousGreenhouseNotes'),
    },
  },
  backgrounds042018: {
    flying_over_an_ancient_forest: {
      text: t('backgroundFlyingOverAncientForestText'),
      notes: t('backgroundFlyingOverAncientForestNotes'),
    },
    flying_over_a_field_of_wildflowers: {
      text: t('backgroundFlyingOverWildflowerFieldText'),
      notes: t('backgroundFlyingOverWildflowerFieldNotes'),
    },
    tulip_garden: {
      text: t('backgroundTulipGardenText'),
      notes: t('backgroundTulipGardenNotes'),
    },
  },
  backgrounds052018: {
    champions_colosseum: {
      text: t('backgroundChampionsColosseumText'),
      notes: t('backgroundChampionsColosseumNotes'),
    },
    fantastical_shoe_store: {
      text: t('backgroundFantasticalShoeStoreText'),
      notes: t('backgroundFantasticalShoeStoreNotes'),
    },
    terraced_rice_field: {
      text: t('backgroundTerracedRiceFieldText'),
      notes: t('backgroundTerracedRiceFieldNotes'),
    },
  },
  backgrounds062018: {
    at_the_docks: {
      text: t('backgroundDocksText'),
      notes: t('backgroundDocksNotes'),
    },
    rowboat: {
      text: t('backgroundRowboatText'),
      notes: t('backgroundRowboatNotes'),
    },
    pirate_flag: {
      text: t('backgroundPirateFlagText'),
      notes: t('backgroundPirateFlagNotes'),
    },
  },
  backgrounds072018: {
    dark_deep: {
      text: t('backgroundDarkDeepText'),
      notes: t('backgroundDarkDeepNotes'),
    },
    dilatory_city: {
      text: t('backgroundDilatoryCityText'),
      notes: t('backgroundDilatoryCityNotes'),
    },
    tide_pool: {
      text: t('backgroundTidePoolText'),
      notes: t('backgroundTidePoolNotes'),
    },
  },
  backgrounds082018: {
    training_grounds: {
      text: t('backgroundTrainingGroundsText'),
      notes: t('backgroundTrainingGroundsNotes'),
    },
    flying_over_rocky_canyon: {
      text: t('backgroundFlyingOverRockyCanyonText'),
      notes: t('backgroundFlyingOverRockyCanyonNotes'),
    },
    bridge: {
      text: t('backgroundBridgeText'),
      notes: t('backgroundBridgeNotes'),
    },
  },
  backgrounds092018: {
    apple_picking: {
      text: t('backgroundApplePickingText'),
      notes: t('backgroundApplePickingNotes'),
    },
    giant_book: {
      text: t('backgroundGiantBookText'),
      notes: t('backgroundGiantBookNotes'),
    },
    cozy_barn: {
      text: t('backgroundCozyBarnText'),
      notes: t('backgroundCozyBarnNotes'),
    },
  },
  backgrounds102018: {
    bayou: {
      text: t('backgroundBayouText'),
      notes: t('backgroundBayouNotes'),
    },
    creepy_castle: {
      text: t('backgroundCreepyCastleText'),
      notes: t('backgroundCreepyCastleNotes'),
    },
    dungeon: {
      text: t('backgroundDungeonText'),
      notes: t('backgroundDungeonNotes'),
    },
  },
  backgrounds112018: {
    back_alley: {
      text: t('backgroundBackAlleyText'),
      notes: t('backgroundBackAlleyNotes'),
    },
    glowing_mushroom_cave: {
      text: t('backgroundGlowingMushroomCaveText'),
      notes: t('backgroundGlowingMushroomCaveNotes'),
    },
    cozy_bedroom: {
      text: t('backgroundCozyBedroomText'),
      notes: t('backgroundCozyBedroomNotes'),
    },
  },
  backgrounds122018: {
    flying_over_snowy_mountains: {
      text: t('backgroundFlyingOverSnowyMountainsText'),
      notes: t('backgroundFlyingOverSnowyMountainsNotes'),
    },
    frosty_forest: {
      text: t('backgroundFrostyForestText'),
      notes: t('backgroundFrostyForestNotes'),
    },
    snowy_day_fireplace: {
      text: t('backgroundSnowyDayFireplaceText'),
      notes: t('backgroundSnowyDayFireplaceNotes'),
    },
  },
  backgrounds012019: {
    avalanche: {
      text: t('backgroundAvalancheText'),
      notes: t('backgroundAvalancheNotes'),
    },
    archaeological_dig: {
      text: t('backgroundArchaeologicalDigText'),
      notes: t('backgroundArchaeologicalDigNotes'),
    },
    scribes_workshop: {
      text: t('backgroundScribesWorkshopText'),
      notes: t('backgroundScribesWorkshopNotes'),
    },
  },
  backgrounds022019: {
    medieval_kitchen: {
      text: t('backgroundMedievalKitchenText'),
      notes: t('backgroundMedievalKitchenNotes'),
    },
    old_fashioned_bakery: {
      text: t('backgroundOldFashionedBakeryText'),
      notes: t('backgroundOldFashionedBakeryNotes'),
    },
    valentines_day_feasting_hall: {
      text: t('backgroundValentinesDayFeastingHallText'),
      notes: t('backgroundValentinesDayFeastingHallNotes'),
    },
  },
  backgrounds032019: {
    duck_pond: {
      text: t('backgroundDuckPondText'),
      notes: t('backgroundDuckPondNotes'),
    },
    field_with_colored_eggs: {
      text: t('backgroundFieldWithColoredEggsText'),
      notes: t('backgroundFieldWithColoredEggsNotes'),
    },
    flower_market: {
      text: t('backgroundFlowerMarketText'),
      notes: t('backgroundFlowerMarketNotes'),
    },
  },
  backgrounds042019: {
    halflings_house: {
      text: t('backgroundHalflingsHouseText'),
      notes: t('backgroundHalflingsHouseNotes'),
    },
    blossoming_desert: {
      text: t('backgroundBlossomingDesertText'),
      notes: t('backgroundBlossomingDesertNotes'),
    },
    birch_forest: {
      text: t('backgroundBirchForestText'),
      notes: t('backgroundBirchForestNotes'),
    },
  },
  backgrounds052019: {
    dojo: {
      text: t('backgroundDojoText'),
      notes: t('backgroundDojoNotes'),
    },
    park_with_statue: {
      text: t('backgroundParkWithStatueText'),
      notes: t('backgroundParkWithStatueNotes'),
    },
    rainbow_meadow: {
      text: t('backgroundRainbowMeadowText'),
      notes: t('backgroundRainbowMeadowNotes'),
    },
  },
  backgrounds062019: {
    school_of_fish: {
      text: t('backgroundSchoolOfFishText'),
      notes: t('backgroundSchoolOfFishNotes'),
    },
    seaside_cliffs: {
      text: t('backgroundSeasideCliffsText'),
      notes: t('backgroundSeasideCliffsNotes'),
    },
    underwater_vents: {
      text: t('backgroundUnderwaterVentsText'),
      notes: t('backgroundUnderwaterVentsNotes'),
    },
  },
  backgrounds072019: {
    lake_with_floating_lanterns: {
      text: t('backgroundLakeWithFloatingLanternsText'),
      notes: t('backgroundLakeWithFloatingLanternsNotes'),
    },
    flying_over_tropical_islands: {
      text: t('backgroundFlyingOverTropicalIslandsText'),
      notes: t('backgroundFlyingOverTropicalIslandsNotes'),
    },
    among_giant_anemones: {
      text: t('backgroundAmongGiantAnemonesText'),
      notes: t('backgroundAmongGiantAnemonesNotes'),
    },
  },
  backgrounds082019: {
    amid_ancient_ruins: {
      text: t('backgroundAmidAncientRuinsText'),
      notes: t('backgroundAmidAncientRuinsNotes'),
    },
    giant_dandelions: {
      text: t('backgroundGiantDandelionsText'),
      notes: t('backgroundGiantDandelionsNotes'),
    },
    treehouse: {
      text: t('backgroundTreehouseText'),
      notes: t('backgroundTreehouseNotes'),
    },
  },
  backgrounds092019: {
    autumn_flower_garden: {
      text: t('backgroundAutumnFlowerGardenText'),
      notes: t('backgroundAutumnFlowerGardenNotes'),
    },
    in_an_ancient_tomb: {
      text: t('backgroundInAnAncientTombText'),
      notes: t('backgroundInAnAncientTombNotes'),
    },
    in_a_classroom: {
      text: t('backgroundInAClassroomText'),
      notes: t('backgroundInAClassroomNotes'),
    },
  },
  backgrounds102019: {
    foggy_moor: {
      text: t('backgroundFoggyMoorText'),
      notes: t('backgroundFoggyMoorNotes'),
    },
    monster_makers_workshop: {
      text: t('backgroundMonsterMakersWorkshopText'),
      notes: t('backgroundMonsterMakersWorkshopNotes'),
    },
    pumpkin_carriage: {
      text: t('backgroundPumpkinCarriageText'),
      notes: t('backgroundPumpkinCarriageNotes'),
    },
  },
  backgrounds112019: {
    farmers_market: {
      text: t('backgroundFarmersMarketText'),
      notes: t('backgroundFarmersMarketNotes'),
    },
    flying_in_a_thunderstorm: {
      text: t('backgroundFlyingInAThunderstormText'),
      notes: t('backgroundFlyingInAThunderstormNotes'),
    },
    potion_shop: {
      text: t('backgroundPotionShopText'),
      notes: t('backgroundPotionShopNotes'),
    },
  },
  backgrounds122019: {
    holiday_market: {
      text: t('backgroundHolidayMarketText'),
      notes: t('backgroundHolidayMarketNotes'),
    },
    holiday_wreath: {
      text: t('backgroundHolidayWreathText'),
      notes: t('backgroundHolidayWreathNotes'),
    },
    winter_nocturne: {
      text: t('backgroundWinterNocturneText'),
      notes: t('backgroundWinterNocturneNotes'),
    },
  },
  backgrounds012020: {
    birthday_party: {
      text: t('backgroundBirthdayPartyText'),
      notes: t('backgroundBirthdayPartyNotes'),
    },
    desert_with_snow: {
      text: t('backgroundDesertWithSnowText'),
      notes: t('backgroundDesertWithSnowNotes'),
    },
    snowglobe: {
      text: t('backgroundSnowglobeText'),
      notes: t('backgroundSnowglobeNotes'),
    },
  },
  incentiveBackgrounds: {
    violet: {
      text: t('backgroundVioletText'),
      notes: t('backgroundVioletNotes'),
      currency: 'loginIncentive',
    },
    blue: {
      text: t('backgroundBlueText'),
      notes: t('backgroundBlueNotes'),
      currency: 'loginIncentive',
    },
    green: {
      text: t('backgroundGreenText'),
      notes: t('backgroundGreenNotes'),
      currency: 'loginIncentive',
    },
    purple: {
      text: t('backgroundPurpleText'),
      notes: t('backgroundPurpleNotes'),
      currency: 'loginIncentive',
    },
    red: {
      text: t('backgroundRedText'),
      notes: t('backgroundRedNotes'),
      currency: 'loginIncentive',
    },
    yellow: {
      text: t('backgroundYellowText'),
      notes: t('backgroundYellowNotes'),
      currency: 'loginIncentive',
    },
  },
};
/* eslint-enable quote-props */

const flat = {};

forOwn(backgrounds, (backgroundsInSet, set) => {
  forOwn(backgroundsInSet, (background, bgKey) => {
    background.key = bgKey;
    background.set = set;
    background.price = 7;

    flat[bgKey] = background;
  });
});

export default backgrounds;

export function backgroundsTree () {
  return backgrounds;
}

export function backgroundsFlat () {
  return flat;
}
