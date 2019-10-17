class GlobalConfig {

	private static config;

	static init() {
		let self = this;
		if (self.config)return;

		let config = self.config = RES.getRes("config_json");
		if (!config) {
			return;
		}
		
		let parseKeys = function (obj:any, proto:any, key:number) {
			if (key == 0) {
				obj.__proto__ = proto;
			} else {
				for (let i in obj) {
					parseKeys(obj[i], proto, key - 1);
				}
			}
		}

		for (let key in config) {

			let value = config[key];

			let objCls = egret.getDefinitionByName(key);

			if (objCls) {
				//用来存储配置一个默认实例
				let objKey = `_obj${key}`;
				self[objKey] = new objCls();

				//用来确认配置表是否已经设置 __proto__ 为 储存的实例（this[objKey])
				let boolKey = `_bool${key}`;
				self[boolKey] = false;

				//将真正的配置存放在this[newKey]中
				let newKey = `_${key}_`;
				//创建key引用配置
				Object.defineProperty(self, key, {
					get: function () {
						let obj = self[newKey];
						if (self[boolKey]) {
							return obj;
						}

						let proto = self[objKey];

						parseKeys(obj, proto, GlobalConfig.keys[key] || 0);

						self[boolKey] = true;

						return obj;
					},
					set: function (val) {
						self[newKey] = val;
					}
				});
			}

			//是否需要深拷贝赋值？
			self[key] = value;
		}

		RES.destroyRes("config_json");
	}

	static ConfigPlayFun: ConfigPlayFun[];
	static ConfigTeamFuBenGuide: ConfigTeamFuBenGuide[][];
	static ConfigActivityType12: ConfigActivityType12[][];
	static ConfigShenShou: ConfigShenShou;
	static ShenShouBase: ShenShouBase[];
	static ShenShouEquip: ShenShouEquip[];
	static ShenShouSkill: ShenShouSkill[];
	static ConfigPActivityType9: ConfigPActivityType9[][];
	static ConfigPActivityType1: ConfigPActivityType1[][];
	static ConfigMerge: ConfigMerge[][];
	static MergeTotal: MergeTotal[];
	static ConfigZhanLing: ConfigZhanLing;
	static ZhanLingBase: ZhanLingBase[];
	static ZhanLingLevel: ZhanLingLevel[][];
	static ZhanLingEquip: ZhanLingEquip[];
	static ZhanLingSuit: ZhanLingSuit[];
	static ZhanLingTalent: ZhanLingTalent[][];
	static ZhanLingSkill: ZhanLingSkill[];
	static ConfigTeamFuBenBase: ConfigTeamFuBenBase;
	static ConfigTeamFuBen: ConfigTeamFuBen[];
	static FlameStamp: FlameStamp;
	static ConfigWeixin: ConfigWeixin[];
	static DayChargeGiftConfig: DayChargeGiftConfig[];
	static FlameStampLevel: FlameStampLevel[];
	static ConfigPActivity2: ConfigPActivity2[][];
	static FlameStampEffect: FlameStampEffect[][];
	static FlameStampMat: FlameStampMat[];
	static ConfigPActivity3: ConfigPActivity3[][];
	static ConfigPActivityBtn: ConfigPActivityBtn[];
	static ConfigPActivity: ConfigPActivity[];
	static WeaponSoulItemAttr: WeaponSoulItemAttr[];
	static ConfigWeaponSoulBase: ConfigWeaponSoulBase;
	static PrivilegeData: PrivilegeData;
	static ConfigActivityType10: ConfigActivityType10[][];
	static ConfigPunchEquipMaster: ConfigPunchEquipMaster[];
	static ConfigPunchEquip: ConfigPunchEquip[][];
	static ConfigActivityType9: ConfigActivityType9[][];
	static ConfigSuperVip: ConfigSuperVip[];
	static ConfigGodWeaponTask: ConfigGodWeaponTask[][];
	static ConfigTrainDayAward: ConfigTrainDayAward[][];
	static ConfigActivityType5: ConfigActivityType5[][];
	static ConfigItemCompose: ConfigItemCompose[];
	static ConfigLoopRecharge: ConfigLoopRecharge[][];
	static ConfigCampBattle: ConfigCampBattle;
	static ConfigCampBattlePersonalAward: ConfigCampBattlePersonalAward[];
	static ConfigCampBattlePersonalRankAward: ConfigCampBattlePersonalRankAward[];
	static ConfigGodWingLevel: ConfigGodWingLevel[][];
	static MonsterTitleConf: MonsterTitleConf[];
	static ConfigFbChallengeLottery: ConfigFbChallengeLottery[];
	static ConfigGodWingSuit: ConfigGodWingSuit[];
	static ConfigGodWingItem: ConfigGodWingItem[];
	static ConfigNewWorldBossRank: ConfigNewWorldBossRank[][];
	static ConfigNewWorldBossAttr: ConfigNewWorldBossAttr[];
	static ConfigNewWorldBossBase: ConfigNewWorldBossBase;
	static ConfigMailId: ConfigMailId[];
	static ConfigCityBase: ConfigCityBase;
	static ConfigCityBoss: ConfigCityBoss[];
	static ConfigGuildBonFire: ConfigGuildBonFire[];
	static ConfigActivityType4: ConfigActivityType4[][];
	static ConfigVipGift: ConfigVipGift[];
	static ConfigQQVipPrivilegeGift: ConfigQQVipPrivilegeGift[];
	static ConfigQQVipGift: ConfigQQVipGift[];
	static ConfigActivityType3: ConfigActivityType3[][];
	static ConfigRechargeItems: ConfigRechargeItems[];
	static ConfigKuangYuan: ConfigKuangYuan[];
	static ConfigNpcBase: ConfigNpcBase[];
	static ConfigCaiKuang: ConfigCaiKuang;
	static ConfigRichManRoundAward: ConfigRichManRoundAward[];
	static ConfigRichManGrid: ConfigRichManGrid[];
	static ConfigRichManBase: ConfigRichManBase;
	static ConfigFuwenTreasureReward: ConfigFuwenTreasureReward[];
	static ConfigMonsterSpeak: ConfigMonsterSpeak[][];
	static ConfigRechargeDaysAwards: ConfigRechargeDaysAwards[];
	static ConfigLeadFubenBase: ConfigLeadFubenBase;
	static ConfigGuanYinAward: ConfigGuanYinAward[];
	static ConfigMonthCard: ConfigMonthCard;
	static ConfigItemGift: ConfigItemGift[];
	static ConfigHeirloomEquip: ConfigHeirloomEquip[][];
	static ConfigHeirloomEquipItem: ConfigHeirloomEquipItem[];
	static ConfigHeirloomEquipFire: ConfigHeirloomEquipFire[];
	static ConfigHeirloomEquipSet: ConfigHeirloomEquipSet[];
	static ConfigItemDesc: ConfigItemDesc[];
	static ConfigDailyRecharge: ConfigDailyRecharge[][];
	static ConfigFirstRecharge: ConfigFirstRecharge[];
	static ConfigFirstRechargeClient: ConfigFirstRechargeClient[];
	static ConfigExpFubenBase: ConfigExpFubenBase;
	static ConfigExpFuben: ConfigExpFuben[];
	static ConfigExpFbMonster: ConfigExpFbMonster[];
	static ConfigImbaSkillRevise: ConfigImbaSkillRevise[];
	static ConfigHint: ConfigHint[];
	static ConfigSkillsSorder: ConfigSkillsSorder[];
	static ConfigSkillsDesc: ConfigSkillsDesc[];
	static ConfigScenes: ConfigScenes[];
	static ConfigYouDang: ConfigYouDang[];
	static ConfigBossHome: ConfigBossHome[];
	static ConfigOpenSystem: ConfigOpenSystem[];
	static ConfigLoongSoulBase: ConfigLoongSoulBase;
	static ConfigDeathgainWay: ConfigDeathgainWay[];
	static ConfigDeathGuide: ConfigDeathGuide[];
	static ConfigTrainBase: ConfigTrainBase;
	static ConfigStoneOpen: ConfigStoneOpen[];
	static ConfigWorldBossKillMsg: ConfigWorldBossKillMsg[];
	static ConfigMonstershp: ConfigMonstershp[];
	static ConfigMonthSignVip: ConfigMonthSignVip[];
	static ConfigMonthSignDays: ConfigMonthSignDays[];
	static ConfigMonthSign: ConfigMonthSign[];
	static ConfigBookList: ConfigBookList[];
	static ConfigDecompose: ConfigDecompose[];
	static ConfigSuit: ConfigSuit[][];
	static ConfigCard: ConfigCard[][];
	static ConfigTreasureBox: ConfigTreasureBox[];
	static ConfigTianTiRankAward: ConfigTianTiRankAward[];
	static ConfigNeiGongBase: ConfigNeiGongBase;
	static ConfigNeiGongStage: ConfigNeiGongStage[][];
	static ConfigFuwenTreasure: ConfigFuwenTreasure;
	static ConfigFuwenTreasureLevel: ConfigFuwenTreasureLevel[];
	static ConfigFbChallenge: ConfigFbChallenge[];
	static ConfigRuneConver: ConfigRuneConver[];
	static ConfigRuneBase: ConfigRuneBase[];
	static ConfigRuneLockPos: ConfigRuneLockPos[];
	static ConfigRuneName: ConfigRuneName[];
	static ConfigRuneOther: ConfigRuneOther;
	static ConfigRuneCompose: ConfigRuneCompose[];
	static ConfigTogetherHitEquipPage: ConfigTogetherHitEquipPage[];
	static ConfigTogetherHitEquipQm: ConfigTogetherHitEquipQm[][][];
	static ConfigTogetherHitEquipExchange: ConfigTogetherHitEquipExchange[];
	static ConfigTogetherHit: ConfigTogetherHit[];
	static ConfigLimitTimeTask: ConfigLimitTimeTask[];
	static ConfigLimitTime: ConfigLimitTime[];
	static ConfigBubble: ConfigBubble[];
	static DefineEff: DefineEff[];
	static ConfigActorExRing: ConfigActorExRing[];
	static ConfigActorExRingBook: ConfigActorExRingBook[][];
	static ConfigActorExRing2: ConfigActorExRing2[];
	static ConfigActorExRing3: ConfigActorExRing3[];
	static ConfigActorExRing4: ConfigActorExRing4[];
	static ConfigActorExRing5: ConfigActorExRing5[];
	static ConfigActorExRing6: ConfigActorExRing6[];
	static ConfigActorExRing7: ConfigActorExRing7[];
	static ConfigActorExRingAbility: ConfigActorExRingAbility[];
	static ConfigActorExRingItem: ConfigActorExRingItem[][][];
	static ConfigActorExRingFuben: ConfigActorExRingFuben;
	static ConfigMonsters: ConfigMonsters[];
	static ConfigExp: ConfigExp[];
	static ConfigItem: ConfigItem[];
	static ConfigEquip: ConfigEquip[];
	static ConfigSkills: ConfigSkills[];
	static ConfigSkirmishReward: ConfigSkirmishReward[];
	static ConfigSkirmishBase: ConfigSkirmishBase;
	static ConfigEffects: ConfigEffects[];
	static ConfigWorldReward: ConfigWorldReward[];
	static ConfigWingLevel: ConfigWingLevel[];
	static ConfigWingCommon: ConfigWingCommon;
	static ConfigDailyFuben: ConfigDailyFuben[];
	static ConfigDaily: ConfigDaily[];
	static ConfigDailyAward: ConfigDailyAward[];
	static ImbaJigsawConf: ImbaJigsawConf[];
	static ImbaConf: ImbaConf[];
	static ConfigAchievementTask: ConfigAchievementTask[];
	static ConfigZhuanSheng: ConfigZhuanSheng;
	static ConfigZhuanShengLevel: ConfigZhuanShengLevel[];
	static ConfigJingMaiStage: ConfigJingMaiStage[];
	static ConfigJingMaiLevel: ConfigJingMaiLevel[];
	static ConfigJingMaiCommon: ConfigJingMaiCommon;
	static ConfigSkillsUpgrade: ConfigSkillsUpgrade[];
	static ConfigSkillsOpen: ConfigSkillsOpen[];
	static ConfigZhuanShengExp: ConfigZhuanShengExp[];
	static ConfigNewRole: ConfigNewRole[];
	static ConfigStoneLevelCost: ConfigStoneLevelCost[];
	static ConfigStoneLevel: ConfigStoneLevel[];
	static ConfigZhulingAttr: ConfigZhulingAttr[];
	static ConfigZhulingCost: ConfigZhulingCost[];
	static ConfigEnhanceAttr: ConfigEnhanceAttr[];
	static ConfigEnhanceCost: ConfigEnhanceCost[];
	static ConfigLegendLevelup: ConfigLegendLevelup[];
	static ConfigLegendCompose: ConfigLegendCompose[];
	static ConfigExRing: ConfigExRing[];
	static ConfigExRing0: ConfigExRing0[];
	static ConfigExRing1: ConfigExRing1[];
	static ConfigEquipItem: ConfigEquipItem[];
	static ConfigItemStore: ConfigItemStore[];
	static ConfigStoreCommon: ConfigStoreCommon;
	static IntegralStore: IntegralStore[];
	static ConfigTreasureOverView: ConfigTreasureOverView[];
	static ConfigEffect: ConfigEffect[];
	static ConfigVip: ConfigVip[];
	static ConfigShield: ConfigShield[];
	static ConfigShieldStage: ConfigShieldStage[];
	static ConfigLoongSoul: ConfigLoongSoul[];
	static ConfigLoongSoulStage: ConfigLoongSoulStage[];
	static ConfigTreasureHunt: ConfigTreasureHunt;
	static ConfigTreasureHuntPool: ConfigTreasureHuntPool[];
	static ConfigTreasureHuntPoolHefu: ConfigTreasureHuntPoolHefu[];
	static ConfigSkirmishRank: ConfigSkirmishRank[];
	static ConfigGainItem: ConfigGainItem[];
	static ConfigBagBase: ConfigBagBase;
	static ConfigBagExpand: ConfigBagExpand[];
	static ConfigWorldBoss: ConfigWorldBoss[];
	static ConfigWorldBossBase: ConfigWorldBossBase;
	static ServerTips: ServerTips[];
	static ConfigFbChName: ConfigFbChName[];
	static ConfigAttrPower: ConfigAttrPower[];
	static ConfigTrainLevel: ConfigTrainLevel[];
	static ConfigLoginRewards: ConfigLoginRewards[];
	static ConfigActivityType1: ConfigActivityType1[][];
	static ConfigActivityType2: ConfigActivityType2[][];
	static ConfigActivityType6: ConfigActivityType6[][];
	static ConfigActivityType8: ConfigActivityType8[][];
	static ConfigActivityType7: ConfigActivityType7[][];
	static ConfigActivity: ConfigActivity[];
	static ConfigActivityBtn: ConfigActivityBtn[];
	static ConfigSkillPower: ConfigSkillPower[];
	static ConfigKnighthood: ConfigKnighthood[];
	static ConfigKnighthoodBasic: ConfigKnighthoodBasic;
	static ConfigChongZhi2: ConfigChongZhi2[][][];
	static ConfigRefinesystemExp: ConfigRefinesystemExp[];
	static ConfigVipGrid: ConfigVipGrid[];
	static ConfigOtherBoss1: ConfigOtherBoss1[];
	static ConfigEquipPointConst: ConfigEquipPointConst;
	static ConfigEquipPointBasic: ConfigEquipPointBasic[];
	static ConfigEquipPointGrowUp: ConfigEquipPointGrowUp[][];
	static ConfigEquipPointRank: ConfigEquipPointRank[][];
	static ConfigEquipPointResolve: ConfigEquipPointResolve[];
	static WanBaGiftbagBasic: WanBaGiftbagBasic[];
	static ConfigHelpInfo: ConfigHelpInfo[];
	static ConfigTianTiConst: ConfigTianTiConst;
	static ConfigTianTiDan: ConfigTianTiDan[][];
	static ConfigClientGlobal: ConfigClientGlobal;
	static ConfigCashCowBox: ConfigCashCowBox[];
	static ConfigCashCowLimit: ConfigCashCowLimit[];
	static ConfigCashCowBasic: ConfigCashCowBasic[];
	static ConfigCashCowAmplitude: ConfigCashCowAmplitude[];
	static ConfigGuild: ConfigGuild;
	static ConfigGuildCommonSkill: ConfigGuildCommonSkill[][];
	static ConfigGuildCreate: ConfigGuildCreate[];
	static ConfigGuildDonate: ConfigGuildDonate[];
	static ConfigGuildLevel: ConfigGuildLevel[][];
	static ConfigGuildTask: ConfigGuildTask[];
	static ConfigWelfare: ConfigWelfare[];
	static ConfigOtherBoss2: ConfigOtherBoss2[];
	static ConfigMiJiGrid: ConfigMiJiGrid[];
	static ConfigMiJiSkill: ConfigMiJiSkill[];
	static ConfigMijiBase: ConfigMijiBase;
	static TitleConf: TitleConf[];
	static ConfigTrainLevelAward: ConfigTrainLevelAward[];
	static ConfigTerraceDesc: ConfigTerraceDesc[];
	static WeiXiGuanZhuConst: WeiXiGuanZhuConst;
	static GuildBattleLevel: GuildBattleLevel[];
	static GuildBattleConst: GuildBattleConst;
	static GuildBattleDayAward: GuildBattleDayAward[];
	static GuildBattleDistributionAward: GuildBattleDistributionAward[][];
	static GuildBattlePersonalAward: GuildBattlePersonalAward[];
	static GuildBattlePersonalRankAward: GuildBattlePersonalRankAward[];
	static FriendLimit: FriendLimit;
	static ZhuangBanId: ZhuangBanId[];
	static ConfigZhuangBan: ConfigZhuangBan;
	static FeatsStore: FeatsStore[];
	static ConfigGuildBoss: ConfigGuildBoss;
	static ConfigGuildBossInfo: ConfigGuildBossInfo[];
	static ConfigGuildBossHpAwards: ConfigGuildBossHpAwards[][];
	static ConfigGuildBossRank: ConfigGuildBossRank[];
	static ConfigGuide: ConfigGuide[][];
	static ConfigTogerherHitBase: ConfigTogerherHitBase;
	static ActorExRingCommon: ActorExRingCommon;
	static ConfigWeaponSoul: ConfigWeaponSoul[];
	static ConfigWeaponSoulPos: ConfigWeaponSoulPos[][];
	static WeaponSoulSuit: WeaponSoulSuit[][];
	static ConfigLoginActivate: ConfigLoginActivate;
	static ConfigHeirloomTreasure: ConfigHeirloomTreasure;
	static ConfigHeirloomTreasureReward: ConfigHeirloomTreasureReward[];
	static ConfigOptionalGift: ConfigOptionalGift[];
	static ConfigGodweaponItem: ConfigGodweaponItem[];
	static ConfigGodWeaponLine: ConfigGodWeaponLine[][];
	static ConfigGodWeaponLevel: ConfigGodWeaponLevel[];
	static ConfigGodWeaponBase: ConfigGodWeaponBase;
	static ConfigGodWeaponFuben: ConfigGodWeaponFuben[];
	static ConfigGWSkillRevise: ConfigGWSkillRevise[];
	static ConfigMoney: ConfigMoney[];
	static ConfigYuPei: ConfigYuPei[];
	static ConfigYuPeiBasic: ConfigYuPeiBasic;
	static ConfigPassionPoint: ConfigPassionPoint;
	static ConfigPassionPointAward: ConfigPassionPointAward[];
	static ConfigFbChallengeBase: ConfigFbChallengeBase;
	static ConfigRole: ConfigRole[][];
	static ConfigNewFuncNotice: ConfigNewFuncNotice[];
	static ReincarnationBase: ReincarnationBase;
	static ReincarnationExchange: ReincarnationExchange[];
	static ReincarnationLevel: ReincarnationLevel[];
	static ReincarnateSpirit: ReincarnateSpirit[][];
	static ReincarnateSuit: ReincarnateSuit[];
	static ReincarnateEquip: ReincarnateEquip[];
	static ConfigEquipWithEff: ConfigEquipWithEff[];
	static PrestigeBase: PrestigeBase;
	static PrestigeLevel: PrestigeLevel[];
	static ConfigActivityType11_1: ConfigActivityType11_1[][];
	static ConfigActivityType11_2: ConfigActivityType11_2[][];
	static ReincarnateEquipCompose: ReincarnateEquipCompose[];
	static ConfigSpecialEquips: ConfigSpecialEquips[];
	static ReincarnationSoulLevel: ReincarnationSoulLevel[][][];
	static ReincarnationDemonLevel: ReincarnationDemonLevel[][];
	static ReincarnationLinkLevel: ReincarnationLinkLevel[][][];
	static PeakRaceBase: PeakRaceBase;
	static PeakRaceTime: PeakRaceTime[];
	static PeakRaceCrossTime: PeakRaceCrossTime[];
	static ConfigActivityType19: ConfigActivityType19[][];
	static ConfigActivityType18: ConfigActivityType18[][];
	static ConfigHeartMethodStar: ConfigHeartMethodStar[];
	static GuardGodWeaponConf: GuardGodWeaponConf;
	static GGWWaveConf: GGWWaveConf[][];
	static ConfigJadePlateBase: ConfigJadePlateBase;
	static ConfigJadePlateLevel: ConfigJadePlateLevel[];
	static ConfigHeartMethodBase: ConfigHeartMethodBase;
	static ConfigHeartMethod: ConfigHeartMethod[];
	static ConfigHeartMethodPos: ConfigHeartMethodPos[][][];
	static ConfigHeartMethodLevel: ConfigHeartMethodLevel[][];
	static ConfigHeartMethodStage: ConfigHeartMethodStage[][];
	static ConfigHeartMethodSuit: ConfigHeartMethodSuit[][];
	static ZhiZunEquipLevel: ZhiZunEquipLevel[][];
	static ZhiZunLinkLevel: ZhiZunLinkLevel[][][];
	static CrossBossBase: CrossBossBase;
	static ConfigCrossBoss: ConfigCrossBoss[];
	static ZhuangBanLevelUp: ZhuangBanLevelUp[][];
	static ConfigActivityType20: ConfigActivityType20[][];
	static ConfigActivityType22_1: ConfigActivityType22_1[][];
	static ConfigActivityType22_3: ConfigActivityType22_3[][][];
	static ConfigHideBoss: ConfigHideBoss[];
	static DevilBossBase: DevilBossBase;
	static ConfigDevilBoss: ConfigDevilBoss[];
	static ConfigAuction: ConfigAuction;
	static AuctionItem: AuctionItem[];
	static HunGuConf: HunGuConf;
	static HunGuEquip: HunGuEquip[];
	static HunYuEquip: HunYuEquip[][];
	static HunGuSuit: HunGuSuit[][][];
	static ConfigFsFb: ConfigFsFb[];
	static ConfigInstanceBase: ConfigInstanceBase;
	static ConfigMultiDayRecharge: ConfigMultiDayRecharge[];
	static CrossArenaBase: CrossArenaBase;
	static ConfigUpdateRemind: ConfigUpdateRemind;


	private static keys = {
		"ConfigPlayFun": 1,
		"ConfigTeamFuBenGuide": 2,
		"ConfigActivityType12": 2,
		"ConfigShenShou": 0,
		"ShenShouBase": 1,
		"ShenShouEquip": 1,
		"ShenShouSkill": 1,
		"ConfigPActivityType9": 2,
		"ConfigPActivityType1": 2,
		"ConfigMerge": 2,
		"MergeTotal": 1,
		"ConfigZhanLing": 0,
		"ZhanLingBase": 1,
		"ZhanLingLevel": 2,
		"ZhanLingEquip": 1,
		"ZhanLingSuit": 1,
		"ZhanLingTalent": 2,
		"ZhanLingSkill": 1,
		"ConfigTeamFuBenBase": 0,
		"ConfigTeamFuBen": 1,
		"FlameStamp": 0,
		"ConfigWeixin": 1,
		"DayChargeGiftConfig": 1,
		"FlameStampLevel": 1,
		"ConfigPActivity2": 2,
		"FlameStampEffect": 2,
		"FlameStampMat": 1,
		"ConfigPActivity3": 2,
		"ConfigPActivityBtn": 1,
		"ConfigPActivity": 1,
		"WeaponSoulItemAttr": 1,
		"ConfigWeaponSoulBase": 0,
		"PrivilegeData": 0,
		"ConfigActivityType10": 2,
		"ConfigPunchEquipMaster": 1,
		"ConfigPunchEquip": 2,
		"ConfigActivityType9": 2,
		"ConfigSuperVip": 1,
		"ConfigGodWeaponTask": 2,
		"ConfigTrainDayAward": 2,
		"ConfigActivityType5": 2,
		"ConfigItemCompose": 1,
		"ConfigLoopRecharge": 2,
		"ConfigCampBattle": 0,
		"ConfigCampBattlePersonalAward": 1,
		"ConfigCampBattlePersonalRankAward": 1,
		"ConfigGodWingLevel": 2,
		"MonsterTitleConf": 1,
		"ConfigFbChallengeLottery": 1,
		"ConfigGodWingSuit": 1,
		"ConfigGodWingItem": 1,
		"ConfigNewWorldBossRank": 2,
		"ConfigNewWorldBossAttr": 1,
		"ConfigNewWorldBossBase": 0,
		"ConfigMailId": 1,
		"ConfigCityBase": 0,
		"ConfigCityBoss": 1,
		"ConfigGuildBonFire": 1,
		"ConfigActivityType4": 2,
		"ConfigVipGift": 1,
		"ConfigQQVipPrivilegeGift": 1,
		"ConfigQQVipGift": 1,
		"ConfigActivityType3": 2,
		"ConfigRechargeItems": 1,
		"ConfigKuangYuan": 1,
		"ConfigNpcBase": 1,
		"ConfigCaiKuang": 0,
		"ConfigRichManRoundAward": 1,
		"ConfigRichManGrid": 1,
		"ConfigRichManBase": 0,
		"ConfigFuwenTreasureReward": 1,
		"ConfigMonsterSpeak": 2,
		"ConfigRechargeDaysAwards": 1,
		"ConfigLeadFubenBase": 0,
		"ConfigGuanYinAward": 1,
		"ConfigMonthCard": 0,
		"ConfigItemGift": 1,
		"ConfigHeirloomEquip": 2,
		"ConfigHeirloomEquipItem": 1,
		"ConfigHeirloomEquipFire": 1,
		"ConfigHeirloomEquipSet": 1,
		"ConfigItemDesc": 1,
		"ConfigDailyRecharge": 2,
		"ConfigFirstRecharge": 1,
		"ConfigFirstRechargeClient": 1,
		"ConfigExpFubenBase": 0,
		"ConfigExpFuben": 1,
		"ConfigExpFbMonster": 1,
		"ConfigImbaSkillRevise": 1,
		"ConfigHint": 1,
		"ConfigSkillsSorder": 1,
		"ConfigSkillsDesc": 1,
		"ConfigScenes": 1,
		"ConfigYouDang": 1,
		"ConfigBossHome": 1,
		"ConfigOpenSystem": 1,
		"ConfigLoongSoulBase": 0,
		"ConfigDeathgainWay": 1,
		"ConfigDeathGuide": 1,
		"ConfigTrainBase": 0,
		"ConfigStoneOpen": 1,
		"ConfigWorldBossKillMsg": 1,
		"ConfigMonstershp": 1,
		"ConfigMonthSignVip": 1,
		"ConfigMonthSignDays": 1,
		"ConfigMonthSign": 1,
		"ConfigBookList": 1,
		"ConfigDecompose": 1,
		"ConfigSuit": 2,
		"ConfigCard": 2,
		"ConfigTreasureBox": 1,
		"ConfigTianTiRankAward": 1,
		"ConfigNeiGongBase": 0,
		"ConfigNeiGongStage": 2,
		"ConfigFuwenTreasure": 0,
		"ConfigFuwenTreasureLevel": 1,
		"ConfigFbChallenge": 1,
		"ConfigRuneConver": 1,
		"ConfigRuneBase": 1,
		"ConfigRuneLockPos": 1,
		"ConfigRuneName": 1,
		"ConfigRuneOther": 0,
		"ConfigRuneCompose": 1,
		"ConfigTogetherHitEquipPage": 1,
		"ConfigTogetherHitEquipQm": 3,
		"ConfigTogetherHitEquipExchange": 1,
		"ConfigTogetherHit": 1,
		"ConfigLimitTimeTask": 1,
		"ConfigLimitTime": 1,
		"ConfigBubble": 1,
		"DefineEff": 1,
		"ConfigActorExRing": 1,
		"ConfigActorExRingBook": 2,
		"ConfigActorExRing2": 1,
		"ConfigActorExRing3": 1,
		"ConfigActorExRing4": 1,
		"ConfigActorExRing5": 1,
		"ConfigActorExRing6": 1,
		"ConfigActorExRing7": 1,
		"ConfigActorExRingAbility": 1,
		"ConfigActorExRingItem": 3,
		"ConfigActorExRingFuben": 0,
		"ConfigMonsters": 1,
		"ConfigExp": 1,
		"ConfigItem": 1,
		"ConfigEquip": 1,
		"ConfigSkills": 1,
		"ConfigSkirmishReward": 1,
		"ConfigSkirmishBase": 0,
		"ConfigEffects": 1,
		"ConfigWorldReward": 1,
		"ConfigWingLevel": 1,
		"ConfigWingCommon": 0,
		"ConfigDailyFuben": 1,
		"ConfigDaily": 1,
		"ConfigDailyAward": 1,
		"ImbaJigsawConf": 1,
		"ImbaConf": 1,
		"ConfigAchievementTask": 1,
		"ConfigZhuanSheng": 0,
		"ConfigZhuanShengLevel": 1,
		"ConfigJingMaiStage": 1,
		"ConfigJingMaiLevel": 1,
		"ConfigJingMaiCommon": 0,
		"ConfigSkillsUpgrade": 1,
		"ConfigSkillsOpen": 1,
		"ConfigZhuanShengExp": 1,
		"ConfigNewRole": 1,
		"ConfigStoneLevelCost": 1,
		"ConfigStoneLevel": 1,
		"ConfigZhulingAttr": 1,
		"ConfigZhulingCost": 1,
		"ConfigEnhanceAttr": 1,
		"ConfigEnhanceCost": 1,
		"ConfigLegendLevelup": 1,
		"ConfigLegendCompose": 1,
		"ConfigExRing": 1,
		"ConfigExRing0": 1,
		"ConfigExRing1": 1,
		"ConfigEquipItem": 1,
		"ConfigItemStore": 1,
		"ConfigStoreCommon": 0,
		"IntegralStore": 1,
		"ConfigTreasureOverView": 1,
		"ConfigEffect": 1,
		"ConfigVip": 1,
		"ConfigShield": 1,
		"ConfigShieldStage": 1,
		"ConfigLoongSoul": 1,
		"ConfigLoongSoulStage": 1,
		"ConfigTreasureHunt": 0,
		"ConfigTreasureHuntPool": 1,
		"ConfigTreasureHuntPoolHefu": 1,
		"ConfigSkirmishRank": 1,
		"ConfigGainItem": 1,
		"ConfigBagBase": 0,
		"ConfigBagExpand": 1,
		"ConfigWorldBoss": 1,
		"ConfigWorldBossBase": 0,
		"ServerTips": 1,
		"ConfigFbChName": 1,
		"ConfigAttrPower": 1,
		"ConfigTrainLevel": 1,
		"ConfigLoginRewards": 1,
		"ConfigActivityType1": 2,
		"ConfigActivityType2": 2,
		"ConfigActivityType6": 2,
		"ConfigActivityType8": 2,
		"ConfigActivityType7": 2,
		"ConfigActivity": 1,
		"ConfigActivityBtn": 1,
		"ConfigSkillPower": 1,
		"ConfigKnighthood": 1,
		"ConfigKnighthoodBasic": 0,
		"ConfigChongZhi2": 3,
		"ConfigRefinesystemExp": 1,
		"ConfigVipGrid": 1,
		"ConfigOtherBoss1": 1,
		"ConfigEquipPointConst": 0,
		"ConfigEquipPointBasic": 1,
		"ConfigEquipPointGrowUp": 2,
		"ConfigEquipPointRank": 2,
		"ConfigEquipPointResolve": 1,
		"WanBaGiftbagBasic": 1,
		"ConfigHelpInfo": 1,
		"ConfigTianTiConst": 0,
		"ConfigTianTiDan": 2,
		"ConfigClientGlobal": 0,
		"ConfigCashCowBox": 1,
		"ConfigCashCowLimit": 1,
		"ConfigCashCowBasic": 1,
		"ConfigCashCowAmplitude": 1,
		"ConfigGuild": 0,
		"ConfigGuildCommonSkill": 2,
		"ConfigGuildCreate": 1,
		"ConfigGuildDonate": 1,
		"ConfigGuildLevel": 2,
		"ConfigGuildTask": 1,
		"ConfigWelfare": 1,
		"ConfigOtherBoss2": 1,
		"ConfigMiJiGrid": 1,
		"ConfigMiJiSkill": 1,
		"ConfigMijiBase": 0,
		"TitleConf": 1,
		"ConfigTrainLevelAward": 1,
		"ConfigTerraceDesc": 1,
		"WeiXiGuanZhuConst": 0,
		"GuildBattleLevel": 1,
		"GuildBattleConst": 0,
		"GuildBattleDayAward": 1,
		"GuildBattleDistributionAward": 2,
		"GuildBattlePersonalAward": 1,
		"GuildBattlePersonalRankAward": 1,
		"FriendLimit": 0,
		"ZhuangBanId": 1,
		"ConfigZhuangBan": 0,
		"FeatsStore": 1,
		"ConfigGuildBoss": 0,
		"ConfigGuildBossInfo": 1,
		"ConfigGuildBossHpAwards": 2,
		"ConfigGuildBossRank": 1,
		"ConfigGuide": 2,
		"ConfigTogerherHitBase": 0,
		"ActorExRingCommon": 0,
		"ConfigWeaponSoul": 1,
		"ConfigWeaponSoulPos": 2,
		"WeaponSoulSuit": 2,
		"ConfigLoginActivate": 0,
		"ConfigHeirloomTreasure": 0,
		"ConfigHeirloomTreasureReward": 1,
		"ConfigOptionalGift": 1,
		"ConfigGodweaponItem": 1,
		"ConfigGodWeaponLine": 2,
		"ConfigGodWeaponLevel": 1,
		"ConfigGodWeaponBase": 0,
		"ConfigGodWeaponFuben": 1,
		"ConfigGWSkillRevise": 1,
		"ConfigMoney": 1,
		"ConfigYuPei": 1,
		"ConfigYuPeiBasic": 0,
		"ConfigPassionPoint": 0,
		"ConfigPassionPointAward": 1,
		"ConfigFbChallengeBase": 0,
		"ConfigRole": 2,
		"ConfigNewFuncNotice": 1,
		"ReincarnationBase": 0,
		"ReincarnationExchange": 1,
		"ReincarnationLevel": 1,
		"ReincarnateSpirit": 2,
		"ReincarnateSuit": 1,
		"ReincarnateEquip": 1,
		"ConfigEquipWithEff": 1,
		"PrestigeBase": 0,
		"PrestigeLevel": 1,
		"ConfigActivityType11_1": 2,
		"ConfigActivityType11_2": 2,
		"ReincarnateEquipCompose": 1,
		"ConfigSpecialEquips": 1,
		"ReincarnationSoulLevel": 3,
		"ReincarnationDemonLevel": 2,
		"ReincarnationLinkLevel": 3,
		"PeakRaceBase": 0,
		"PeakRaceTime": 1,
		"PeakRaceCrossTime": 1,
		"ConfigActivityType19": 2,
		"ConfigActivityType18": 2,
		"ConfigHeartMethodStar": 1,
		"GuardGodWeaponConf": 0,
		"GGWWaveConf": 2,
		"ConfigJadePlateBase": 0,
		"ConfigJadePlateLevel": 1,
		"ConfigHeartMethodBase": 0,
		"ConfigHeartMethod": 1,
		"ConfigHeartMethodPos": 3,
		"ConfigHeartMethodLevel": 2,
		"ConfigHeartMethodStage": 2,
		"ConfigHeartMethodSuit": 2,
		"ZhiZunEquipLevel": 2,
		"ZhiZunLinkLevel": 3,
		"CrossBossBase": 0,
		"ConfigCrossBoss": 1,
		"ZhuangBanLevelUp": 2,
		"ConfigActivityType20": 2,
		"ConfigActivityType22_1": 2,
		"ConfigActivityType22_3": 3,
		"ConfigHideBoss": 1,
		"DevilBossBase": 0,
		"ConfigDevilBoss": 1,
		"ConfigAuction": 0,
		"AuctionItem": 1,
		"HunGuConf": 0,
		"HunGuEquip": 1,
		"HunYuEquip": 2,
		"HunGuSuit": 3,
		"ConfigFsFb": 1,
		"ConfigInstanceBase": 0,
		"ConfigMultiDayRecharge": 1,
		"CrossArenaBase": 0,
		"ConfigUpdateRemind": 0};
}
