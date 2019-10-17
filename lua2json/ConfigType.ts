interface ConfigPlayFun {
	sort: number;
	id: number;
	layer: number;
	icon: string;
	cls: string;
	iconSkin: string;
	pos: number;
	noMove: number;
	iconParam: { x: number, bottom: number, height: number, right: number, width: number, y: number, scaleY: number, scaleX: number};
	iconCls: string;
}

interface ConfigTeamFuBenGuide {
	guideText: string;
	monName: string;
	monHead: string;
	orderId: number;
	roomId: number;
	dangerLv: string;
}

interface ConfigActivityType12 {
	skinType: string;
	exitTime: number;
	index: number;
	showType: number;
	id: number;
	blessWord: string;
	wordCount: number;
	score: number;
	record: string;
	isCross: number;
}

interface ConfigShenShou {
	maxCount: number;
	posCount: number;
	matCount: number;
	openzhuanshenglv: number;
	battleCountItem: number;
	minCount: number;
	openserverday: number;
}

interface ShenShouBase {
	activeImg: string;
	minLevel: number[];
	id: number;
	iconImg: string;
	skill: number[];
}

interface ShenShouEquip {
	attrs: {value:number,type:number}[];
	exp: number;
	id: number;
	totalExp: number;
	starattrs: {value:number,type:number}[];
}

interface ShenShouSkill {
	equipPercent: {}[];
	name: string;
	quality: number;
	id: number;
	target: number;
	icon: string;
	desc: string;
}

interface ConfigPActivityType9 {
	yb: number;
	index: number;
	Id: number;
	showType: number;
	item: number;
	reward: {id:number,type:number,count:number,times:number}[];
	rate: {}[];
}

interface ConfigPActivityType1 {
	index: number;
	Id: number;
	rewards: {id:number,type:number,count:number}[];
	showType: number;
	zhanlingLv: number;
}

interface ConfigMerge {
	index: number;
	sort: number;
	id: number;
	lv: number;
	btn_name: string;
	openZs: number;
}

interface MergeTotal {
	type: number;
	openZs: number;
	id: number;
	sort: number;
	btn_source: string;
}

interface ConfigZhanLing {
	plusLevel: number;
	anchorOffset: number[];
	hintNum: number;
	stageitemid: number;
	openzhuanshenglv: number;
	zlEquipName: {0:string,1:string}[];
	unitTime: number;
	disappearTime: number;
	unitPrice: number;
	fbIndex: number;
	equipPosCount: number;
	delayTime: number;
	openserverday: number;
	upgradeInfo: {attr:{value:number,type:number}[],sort:number,precent:number}[];
	showzhanlingcd: number;
	stageitemexp: number;
}

interface ZhanLingBase {
	sort: number;
	talent: number;
	id: number;
	skill: {id:number,open:number}[];
	mat: number;
	icon: string;
	show: number;
}

interface ZhanLingLevel {
	attrs: {value:number,type:number}[];
	zlNameLabel: string;
	appearance: string;
	exp: number;
	id: number;
	maxCount: {}[];
	stageDesc: string;
	count: number;
	zlName: string;
	activeLv: number;
	level: number;
	innerAppearance: string;
	talentLevel: number;
}

interface ZhanLingEquip {
	id: number;
	level: number;
	attrs: {value:number,type:number}[];
	pos: number;
	mat: {id:number,count:number}[];
}

interface ZhanLingSuit {
	precent: number;
	suitWithName: string;
	expower: number;
	suitCondition: string;
	level: number;
	suitTname: string;
	attrs: {value:number,type:number}[];
}

interface ZhanLingTalent {
	rate: number;
	talentDesc: { name: string, icon: string, desc: string};
	expower: number;
	effId: number;
	id: number;
	level: number;
	costCount: number;
	showWords: string;
	attrs: {value:number,type:number}[];
	passive: {id:number,type:number}[];
}

interface ZhanLingSkill {
	id: number;
	passive: number;
	passivePlus: number;
	attrs: {value:number,type:number}[];
	desc: { icon: string, name: string, desc: string};
}

interface ConfigTeamFuBenBase {
	closeTime: number[];
	flowerChiv: number;
	openDay: number;
	rankBoardSize: number;
	rankMaxSize: number;
	inviteText: string;
	needZsLv: number;
	itemId: number;
}

interface ConfigTeamFuBen {
	nameImg: string;
	fbid: number;
	guanqiaImg: string;
	id: number;
	infoText: string;
	bossImg: string;
	name: string;
	rewardShow: {id:number,type:number,count:number}[];
	bossName: string;
	pmaxnum: number;
	chiv: number;
}

interface FlameStamp {
	monsterId: number[];
	openLevel: number;
	skillId: number[];
}

interface ConfigWeixin {
	id: number;
	shareCount: number;
	shareReward: {id:number,type:number,count:number}[];
	shareInterval: number;
}

interface DayChargeGiftConfig {
	id: number;
	coupon: number;
	awards: {id:number,type:number,count:number}[];
	money: number;
}

interface FlameStampLevel {
	attrs: {value:number,type:number}[];
	bulletDamage: { a: number, b: number};
	bulletDesc: string;
	exp: number;
	costItem: number;
	level: number;
	costCount: number;
	summonerAttr: {value:number,type:number}[];
}

interface ConfigPActivity2 {
	needRecharge: number;
	index: number;
	Id: number;
	rewards: {id:number,type:number,count:number}[];
	currencyType: number;
	count: number;
	originalPrice: number;
	showType: number;
	discount: number;
	price: number;
	vip: number;
}

interface FlameStampEffect {
	stamp: number;
	uiEff: string;
	id: number;
	costCount: number;
	stampLevel: number;
	skillname: string;
	costItem: number;
	level: number;
	icon: string;
	skillId: number;
	exPower: number;
	skillDesc: string;
	reloadTime: number;
	effId: number;
	selfEffId: number;
	bulletDamage: { a: number};
}

interface FlameStampMat {
	mixDesc: string;
	exp: number;
	itemId: number;
	limitLv: number;
	costItem: number;
	costCount: number;
}

interface ConfigPActivity3 {
	showType: number;
	type: number;
	index: number;
	mailInfo: { context: string, head: string};
	Id: number;
	rewards: {id:number,type:number,count:number}[];
	day: number;
	val: number;
}

interface ConfigPActivityBtn {
	activityType: number;
	type: number;
	sort: number;
	title: string;
	id: number;
	timeType: number;
	icon: string;
	light: number;
}

interface ConfigPActivity {
	desc: string;
	tabName: string;
	openType: number;
	Id: number;
	duration: number;
	zslv: number;
	activityType: number;
}

interface WeaponSoulItemAttr {
	attr: {value:number,type:number}[];
	id: number;
}

interface ConfigWeaponSoulBase {
	maxItemNum: number;
	itemid: number;
}

interface PrivilegeData {
	rightDesc: string;
	priviMoney: number;
	reduceKuangTime: number;
	priviCardDays: number;
	addKuangCount: number;
}

interface ConfigActivityType10 {
	yuanBao: number;
	recharge: number;
	id: number;
	level: number;
	info: {multiple:number,value:number}[];
}

interface ConfigPunchEquipMaster {
	exPower: number;
	level: number;
	exattr: {value:number,type:number}[];
}

interface ConfigPunchEquip {
	id: number;
	level: number;
	attr: {value:number,type:number}[];
	cost: { id: number, count: number};
}

interface ConfigActivityType9 {
	yb: number;
	index: number;
	Id: number;
	showType: number;
	item: number;
	reward: {id:number,type:number,count:number,times:number}[];
	rate: {}[];
	middleDesc: string;
}

interface ConfigSuperVip {
	id: number;
	money: number;
}

interface ConfigGodWeaponTask {
	itemName: {0:string,1:string,2:string,3:string,4:string,5:string,6:string,7:string,8:string,9:string,10:string,11:string,12:string,13:string,14:string,15:string,16:string,17:string,18:string}[];
	controlTarget: {0:string,1:string,2:string,3:string,4:string,5:string,6:string,7:string,8:string,9:string,10:string,11:string}[];
	target: number;
	tips: string;
	param: number;
	desc: string;
}

interface ConfigTrainDayAward {
	id: number;
	score: number;
	openDay: number;
	reward: {id:number,type:number,count:number}[];
}

interface ConfigActivityType5 {
	Id: number;
	rewards: {id:number,type:number,count:number}[];
	index: number;
	day: number;
	showType: number;
}

interface ConfigItemCompose {
	srcItemId: number;
	srcCount: number;
}

interface ConfigLoopRecharge {
	awardList: {id:number,type:number,count:number}[];
	pay: number;
	day: number;
	index: number;
}

interface ConfigCampBattle {
	fbId: number;
	openLevel: number;
	noAttack: number[];
	assigncounts: number;
	lastTimes: number;
	desc: string;
	npcPos: number[];
	openDay: number;
	rebornCd: number;
	openTips: string;
	buyRebornCdCost: number;
	assignPer: number;
}

interface ConfigCampBattlePersonalAward {
	id: number;
	count1: number;
	award: {id:number,type:number,count:number}[];
	integral: number;
}

interface ConfigCampBattlePersonalRankAward {
	award: {id:number,type:number,count:number}[];
	rank: number;
}

interface ConfigGodWingLevel {
	level: number;
	itemId: number;
	slot: number;
}

interface MonsterTitleConf {
	Id: number;
	img: string;
	name: string;
	anchorOffsetY: number;
}

interface ConfigFbChallengeLottery {
	count: number;
	group: {id:number,type:number,count:number}[];
}

interface ConfigGodWingSuit {
	precent: number;
	lv: number;
	suitname: string;
	skillicon: string;
	skilldesc: string;
	skillname: string;
	exattr: {value:number,type:number}[];
	skilllevel: number;
}

interface ConfigGodWingItem {
	attr: {value:number,type:number}[];
	slot: number;
	needMoney: number;
	exPower: number;
	exattr: {value:number,type:number}[];
	showlv: number;
	level: number;
	composeItem: { id: number, count: number};
	itemId: number;
}

interface ConfigNewWorldBossRank {
	reward: {id:number,type:number,count:number}[];
}

interface ConfigNewWorldBossAttr {
	attr: {value:number,type:number}[];
	type: number;
	count: number;
}

interface ConfigNewWorldBossBase {
	fbId: number;
	clearCdCost: number;
	lvUpTime: {lv:number,t:number}[];
	openLv: number;
	bossTime: number;
	showAwards: {id:number,type:number,count:number}[];
	showDrows: {id:number,type:number,count:number}[];
}

interface ConfigMailId {
	attachment: {id:number,type:number,count:number}[];
}

interface ConfigCityBase {
	fbId: number;
	enterPoint: {y:number,x:number}[];
	masterPos: { y: number, x: number};
	rebornCd: number;
	statuePos: {};
	BuyRebornCost: number;
}

interface ConfigCityBoss {
	bossId: number;
	showReward: number[];
	killCount: number[];
	killBossId: number;
}

interface ConfigGuildBonFire {
	value: number;
	level: number;
	reward: number;
}

interface ConfigActivityType4 {
	Id: number;
	titleName: string;
	rankType: number;
	ranking: number;
	rewards: {id:number,type:number,count:number}[];
	value: number;
	titleEffName: string;
}

interface ConfigVipGift {
	nameImg: string;
	awards: {id:number,type:number,count:number}[];
	id: number;
	img: string;
	adImg: string;
	pageName: string;
	vipLv: number;
	bgImg: string;
	needYb: number;
	cond: number[];
	hfTimes: number;
}

interface ConfigQQVipPrivilegeGift {
	awards: {id:number,type:number,count:number}[];
	vip: number;
}

interface ConfigQQVipGift {
	count: number;
	originalPrice: number;
	awards: {id:number,type:number,count:number}[];
	needYb: number;
	vip: number;
}

interface ConfigActivityType3 {
	showType: number;
	type: number;
	index: number;
	mailInfo: { context: string, head: string};
	Id: number;
	rewards: {id:number,type:number,count:number}[];
	day: number;
	val: number;
	expAttr: {0:string,1:string,2:string,3:string,4:string,5:string,6:string,7:string,8:string,9:string,10:string,11:string,12:string,13:string,14:string,15:string}[];
	activityID: number[];
}

interface ConfigRechargeItems {
	cash: number;
	itemName: number;
	payType: string;
	amount: number;
	id: number;
	award: number;
	icon: string;
	desc: string;
}

interface ConfigKuangYuan {
	npcId: number;
	baseTime: number;
	id: number;
	rewards: {id:number,type:number,count:number}[];
	needTime: number;
	name: string;
	maxTimes: number;
	color: number;
	level: number;
	revengePrecent: number;
	robPrecent: number;
	rewardItem: {id:number,type:number,count:number}[];
}

interface ConfigNpcBase {
	action: string;
	avatar: string;
	id: number;
	name: string;
	headIcon: string;
	controlTarget: {0:string,1:string,2:string,3:string,4:string,5:string,6:string,7:string,8:string,9:string,10:string,11:string,12:string,13:string,14:string,15:string,16:string,17:string,18:string,19:string,20:string}[];
	level: number;
	title: string;
	actType: number;
	icon: string;
}

interface ConfigCaiKuang {
	maxOpenKuangCount: number;
	maxKuangCount: number;
	openLevel: number;
	openServerDay: number;
	maxRobCount: number;
	quickCost: number;
	refreshCost: number[];
	doubleCost: number;
	needItem: { id: number, count: number};
	kuangPos: {y:number,x:number,d:number}[];
	fubenId: number;
	transPos: {y:number,x:number}[];
	maxBeRobCount: number;
}

interface ConfigRichManRoundAward {
	award: {id:number,type:number,count:number}[];
	round: number;
}

interface ConfigRichManGrid {
	param: number;
	action: number;
	dir: number;
}

interface ConfigRichManBase {
	cameraWidth: number;
	cameraHeight: number;
	speed: number;
	diceTime: number;
	dicePrice: number;
	diceNum: number;
}

interface ConfigFuwenTreasureReward {
	id: number;
	reward: {id:number,type:number,count:number}[];
	needTime: number;
}

interface ConfigMonsterSpeak {
	speak: string;
}

interface ConfigRechargeDaysAwards {
	id: number;
	sum: number;
	awardList: {id:number,type:number,count:number}[];
	bigReward: number;
}

interface ConfigLeadFubenBase {
	rebornCd: number;
	BuyRebornCost: number;
}

interface ConfigGuanYinAward {
	award: { id: number, type: number, count: number};
	level: number;
}

interface ConfigMonthCard {
	smeltPrecent: number;
	neiGongGoldPrecent: number;
	monthCardDays: number;
	expFubenPrecent: number;
	privilegeMoney: number;
	monthCardMoney: number;
	sweepPrecent: number;
	specialAttributes: {value:number,type:number}[];
}

interface ConfigItemGift {
	id: number;
	type: number;
	awards: {id:number,type:number,count:number}[];
}

interface ConfigHeirloomEquip {
	attr: {value:number,type:number}[];
	attr_add: number;
	slot: number;
	expend: { id: number, count: number};
	skillicon: string;
	image: string;
	name: string;
	model: string;
	skilldesc: string;
	lv: number;
	icon: number;
	skillname: string;
}

interface ConfigHeirloomEquipItem {
	downitem: { id: number, count: number};
	expend: { id: number, count: number};
	item: number;
	pos: number;
}

interface ConfigHeirloomEquipFire {
	expend: { id: number, count: number};
	slot: number;
}

interface ConfigHeirloomEquipSet {
	attr: {value:number,type:number}[];
	weff: string;
	neff: string;
	lv: number;
	name: string;
}

interface ConfigItemDesc {
	type: number;
	id: number;
	quality: number;
	subType: number;
	job: number;
}

interface ConfigDailyRecharge {
	awardList: {id:number,type:number,count:number}[];
	pay: number;
	day: number;
	index: number;
}

interface ConfigFirstRecharge {
	paydesc: string;
	payType: string;
	payReturn: number;
	id: number;
	pay: number;
}

interface ConfigFirstRechargeClient {
	RechargeRewardData: {id:number,type:number,count:number}[];
	weaponshow: string;
	bodyshow: string;
	job: number;
}

interface ConfigExpFubenBase {
	openLv: number;
	freeCount: number;
	recPrice: number[];
	vipCount: {}[];
}

interface ConfigExpFuben {
	id: number;
	slv: number;
	fbId: number;
	exp: number;
}

interface ConfigExpFbMonster {
	id: number;
	exp: number;
}

interface ConfigImbaSkillRevise {
	a: number;
	skill: number;
	imba_id: number;
	b: number;
	args: {vals:number[],type:number}[];
	d: number;
	cd: number;
}

interface ConfigHint {
	type: number;
	index: number;
	target: {fbId:number,presceneid:number,achievementId:number,sceneid:number,isfull:number,guanqiaId:number,prefbId:number,taskId:number}[];
	targetType: number;
	image: string;
}

interface ConfigSkillsSorder {
	skillorder: number[];
	job: number;
}

interface ConfigSkillsDesc {
	castRange: number;
	name: string;
	effectId: number;
	cd: number;
	actionType: string;
	sound: string;
	desc: string;
	wordEff: string;
	herdBossRate: number;
	herdPlayerRate: number;
	herdMonRate: number;
}

interface ConfigScenes {
	enterY: number;
	sceneid: number;
	AudioBg: string;
	turn: number;
	enterX: number;
	mapfilename: string;
	autoPunch: number;
	hideBodyEff: number;
	npc: {id:number,x:number,d:number,y:number}[];
	effPos: {pos:{y:number,x:number}[],eff:string}[];
	area: {attr:{type:number}[],grids:{y:number,x:number}[]}[];
}

interface ConfigYouDang {
	id: number;
	fileName: number[];
}

interface ConfigBossHome {
	id: number;
	boss: number[];
	icon: number[];
	vip: number;
}

interface ConfigOpenSystem {
	funName: string;
	openlevel: number;
	judge: number;
	id: number;
	openzs: number;
	opencheck: number;
	than: number;
}

interface ConfigLoongSoulBase {
	openlv: number;
}

interface ConfigDeathgainWay {
	level: number;
	gainWay: {0:string,1:string,2:string,3:string,4:string,5:string,6:string,7:string}[];
	itemId: string;
}

interface ConfigDeathGuide {
	id: number;
	lv: number;
	zslv: number;
	gainWay: {}[][];
}

interface ConfigTrainBase {
	actImbaId: number;
}

interface ConfigStoneOpen {
	posId: number;
	openLv: number;
}

interface ConfigWorldBossKillMsg {
	id: number;
	msg: string;
}

interface ConfigMonstershp {
	typeface: number;
	hp: number;
	avatar: string;
}

interface ConfigMonthSignVip {
	complementTimes: number;
	vipLevel: number;
}

interface ConfigMonthSignDays {
	days: number;
	rewards: {id:number,type:number,count:number}[];
}

interface ConfigMonthSign {
	rewards: {id:number,type:number,count:number}[];
	day: number;
	dayLabel: number;
	vipLabel: number;
}

interface ConfigBookList {
	nameImg: string;
	name: string;
	id: number;
	sort: number;
	icon: string;
	idList: number[];
}

interface ConfigDecompose {
	imgGray: string;
	name: string;
	topStar: number;
	imgLight: string;
	id: number;
	quality: number;
	value: number;
	itemId: number;
	imgShow: string;
}

interface ConfigSuit {
	attrs: {value:number,type:number}[];
	count: number;
	id: number;
	level: number;
	idList: number[];
}

interface ConfigCard {
	attrs: {value:number,type:number}[];
	cost: number;
	id: number;
	level: number;
	power: number;
	itemId: number;
	specialAttr: {value:number,type:number}[];
}

interface ConfigTreasureBox {
	quality: number;
	type: number;
	name: string;
	imgOpen: string;
	imgClose: string;
	rewards: {id:number,type:number,count:number}[];
	time: number;
	desc: {0:string,1:string,2:string,3:string,4:string,5:string,6:string,7:string,8:string,9:string,10:string,11:string,12:string}[];
}

interface ConfigTianTiRankAward {
	award: {id:number,type:number,count:number}[];
	rank: number;
}

interface ConfigNeiGongBase {
	openLevel: number;
	openGuanqia: number;
	levelPerStage: number;
	maxStage: number;
	maxLevel: number;
}

interface ConfigNeiGongStage {
	tips: number;
	costMoney: number;
	attribute: {value:number,type:number}[];
	level: number;
	totalExp: number;
	addExp: number;
}

interface ConfigFuwenTreasure {
	huntTenth: number;
	huntOnce: number;
	maxBlissVal: number;
	openlevel: number;
	huntItem: number;
}

interface ConfigFuwenTreasureLevel {
	level: number;
	showicon: {id:number,type:number,count:number}[];
	levelend: number;
}

interface ConfigFbChallenge {
	fbId: number;
	zsLevelLimit: number;
	levelLimit: number;
	id: number;
	layer: number;
	limitTimes: number;
	lotteryCount: number;
	dayReward: number;
	clearReward: {id:number,type:number,count:number}[];
	group: number;
	showIcon: number;
	equipPos: number;
	describe: string;
}

interface ConfigRuneConver {
	id: number;
	conversion: number;
	checkpoint: number;
}

interface ConfigRuneBase {
	gain: number;
	power: number;
	id: number;
	expend: number;
	attr: {value:number,type:number}[];
	chip: number;
	equipAttr: {value:number,type:number}[];
	exAttr: {value:number,type:number}[];
	specialAttr: {value:number,type:number}[];
	goldCount: number;
}

interface ConfigRuneLockPos {
	lockLv: number;
	pos: number;
}

interface ConfigRuneName {
	runeName: string;
	type: number;
}

interface ConfigRuneOther {
	zsLevel: number;
	goldItemId: number;
	maxQuality: number;
	maxEquip: number;
	maxDecompose: number;
}

interface ConfigRuneCompose {
	checkMaterial: number[];
	count: number;
	id: number;
	material: number[];
	mixId: number[];
}

interface ConfigTogetherHitEquipPage {
	name: string;
	id: number[];
}

interface ConfigTogetherHitEquipQm {
	num: number;
	exAttr: {value:number,type:number}[];
	lv: number;
	zslv: number;
	desc: string;
	noticeId: number;
}

interface ConfigTogetherHitEquipExchange {
	zsLevel: number;
	exchangeMaterial: {id:number,type:number,count:number}[];
	id: number;
	level: number;
	getItem: { id: number, type: number, count: number};
}

interface ConfigTogetherHit {
	exAttr: {value:number,type:number}[];
	level: number;
	condition: {v:number,t:number}[];
	skill_id: number[];
}

interface ConfigLimitTimeTask {
	controlTarget: {0:string,1:string,2:string,3:string,4:string,5:string,6:string,7:string,8:string}[];
	type: number;
	name: string;
	control: number;
	id: number;
	awardList: {id:number,type:number,count:number}[];
	target: number;
	desc: string;
}

interface ConfigLimitTime {
	taskIds: number[];
	openZhuan: number;
	time: number;
	id: number;
	openLevel: number;
}

interface ConfigBubble {
	bubbleid: number;
	type: number;
	news: string;
}

interface DefineEff {
	souce: string;
	effid: number;
}

interface ConfigActorExRing {
	openDay: number;
	effid: number;
	id: number;
	openYb: number;
	wexplain: string;
	explain: string;
	needZs: number;
	name: string;
	order: number;
	needLevel: number;
	openVip: number;
	icon: string;
	mtCombat: number;
	showMonsterLv: number;
	useYb: number;
	skillGridYb: number;
	monsterId: number;
}

interface ConfigActorExRingBook {
	attr: {value:number,type:number}[];
	num: number;
	skillIcon: string;
	skillDesc: string;
	id: number;
	level: number;
	skillName: string;
	itemId: number;
	bookAttrPer: {value:number,type:number}[];
	exPower: number;
}

interface ConfigActorExRing2 {
	bjRate: number;
	upPower: number;
	cost: number;
	costItem: number;
	bjAddPower: number;
	judgeup: number;
	extAttrAward: {value:number,type:number}[];
	addPower: number;
	level: number;
	SpecialRingSkin: string;
	attrAward: {value:number,type:number}[];
}

interface ConfigActorExRing3 {
	bjRate: number;
	upPower: number;
	cost: number;
	costItem: number;
	bjAddPower: number;
	judgeup: number;
	addPower: number;
	level: number;
	SpecialRingSkin: string;
	attrAward: {value:number,type:number}[];
}

interface ConfigActorExRing4 {
	bjRate: number;
	upPower: number;
	cost: number;
	costItem: number;
	bjAddPower: number;
	judgeup: number;
	extAttrAward: {value:number,type:number}[];
	addPower: number;
	level: number;
	SpecialRingSkin: string;
	attrAward: {value:number,type:number}[];
}

interface ConfigActorExRing5 {
	bjRate: number;
	upPower: number;
	cost: number;
	costItem: number;
	bjAddPower: number;
	judgeup: number;
	addPower: number;
	level: number;
	SpecialRingSkin: string;
	attrAward: {value:number,type:number}[];
}

interface ConfigActorExRing6 {
	bjRate: number;
	upPower: number;
	cost: number;
	costItem: number;
	bjAddPower: number;
	judgeup: number;
	addPower: number;
	level: number;
	SpecialRingSkin: string;
	attrAward: {value:number,type:number}[];
}

interface ConfigActorExRing7 {
	tollSkillGrid: number;
	cost: number;
	costItem: number;
	level: number;
	attrAward: {value:number,type:number}[];
	freeSkillGrid: number;
	judgeup: number;
	exPower: number;
	summonerSkillId: number;
	extAttrAward: {value:number,type:number}[];
}

interface ConfigActorExRingAbility {
	abilityName: string;
	abilityDesc: string;
	id: number;
	ringLv: number;
	abilityIcon: string;
}

interface ConfigActorExRingItem {
	id: number;
	abilityName: string;
	attrPer: number;
	abilityDesc: string;
	rid: number;
	lv: number;
	monId: number;
	itemId: number;
}

interface ConfigActorExRingFuben {
	freeCount: number;
	recPrice: number[];
	vipCount: {}[];
	vipcost: number;
	item: number;
	reward: {id:number,type:number,count:number}[];
}

interface ConfigMonsters {
	type: number;
	atk: number;
	def: number;
	id: number;
	hp: number;
	showhp: number;
	head: number;
	effect: number;
	name: string;
	scale: number;
	attrange: number;
	level: number;
	avatar: string;
	res: number;
	dir: number;
	penetRate: number;
	dirNum: number;
	titleId: number;
}

interface ConfigExp {
	expcache: number;
	level: number;
	exp: number;
}

interface ConfigItem {
	id: number;
	name: string;
	icon: number;
	descIndex: number;
	level: number;
	zsLevel: number;
	desc: string;
	bagType: number;
	split: number;
	needyuanbao: number;
	useCond: number;
}

interface ConfigEquip {
	appearance: string;
	stoneId: number;
	id: number;
	stoneNum: number;
	hp: number;
	atk: number;
	noWSoulEff: number;
	job: number;
	def: number;
	res: number;
	baseAttr2: { value: number, type: number};
	baseAttr1: { value: number, type: number};
	exAttr1: { value: number, type: number};
	exPower: number;
	exAttr2: { value: number, type: number};
	moneyType: {count:number,type:number}[];
}

interface ConfigSkills {
	id: number;
	args: { a: number, b: number, type: number, attr: number, c: number};
	desc_ex: number[];
	desc: number;
	castType: number;
	affectRange: number;
	affectCount: number;
	effType: number;
	tarEff: number[];
	teleport: number;
	targetType: number;
	passive: { rate: number, cond: number, p1: number, p3: number, p4: number, p2: number};
	selfEff: number[];
	calcType: number;
	otarEff: number[];
	otherSkills: number[];
}

interface ConfigSkirmishReward {
	rewards: { essence: number, exp: number, gold: number};
	level: number;
}

interface ConfigSkirmishBase {
	failedRewardRate: number;
	openLevel: number;
	rankBoardSize: number;
	subPkvalCost: number;
	rankMaxSize: number;
	onesPkval: number;
	refreshCost: number;
	listSize: number;
	range: number;
	subPkval: number;
	positionCount: number;
	maxPkval: number;
	refreshTime: number;
	noExpCount: number;
}

interface ConfigEffects {
	overlayType: number;
	type: number;
	group: number;
	args: { i: number, c: number, b: number, d: number, a: number, t: number};
	id: number;
	duration: number;
	interval: number;
	isBuff: number;
	unionBuff: number[];
	effName: string;
	probabilityBuff: number;
	effID: number;
	otherBuffs: number[];
}

interface ConfigWorldReward {
	groupId: number;
	name: string;
	position: { y: number, x: number};
	id: number;
	rewards: {id:number,type:number,count:number}[];
	icon: string;
	needLevel: number;
}

interface ConfigWingLevel {
	itemNum: number;
	appearance: string;
	exp: number;
	attrPill: number;
	itemPrice: number;
	specialBaseExp: number;
	name: string;
	flyPill: number;
	attr: {value:number,type:number}[];
	level: number;
	specialRate: {rate:number,times:number}[];
	itemId: number;
	pasSkillId: number;
	clearTime: number;
}

interface ConfigWingCommon {
	flyPillId: number;
	openLevel: number;
	attrPillId: number;
	levelItemid: number;
	flyPillAttr: {value:number,type:number}[];
	openDay: number;
	levelExpChange: {id:number,type:number,count:number}[];
	tempattr: number;
	flyPill: number;
	attrPill: {value:number,type:number}[];
	levelItemidStage: number;
}

interface ConfigDailyFuben {
	levelLimit: number;
	id: number;
	showItem: { id: number, type: number, count: number};
	freeCount: number;
	sweepLevel: number;
	vipBuyCount: {}[];
	name: string;
	zsLevel: number;
	buyPrice: {}[];
	bossId: number;
	des: string;
	monthcard: number;
	specialCard: number;
}

interface ConfigDaily {
	awardList: {id:number,type:number,count:number}[];
	id: number;
	desc: string;
	name: string;
	control: number;
	target: number;
	controlTarget: {0:string,1:string,2:string,3:string,4:string,5:string,6:string,7:string,8:string,9:string}[];
	trainExp: number;
	activeValue: number;
}

interface ConfigDailyAward {
	id: number;
	awardList: {id:number,type:number,count:number}[];
	valueLimit: number;
}

interface ImbaJigsawConf {
	jigsawId: number;
	name: string;
	power: number;
	point: { y: number, x: number};
	guide: string;
	img: string;
	attrs: {value:number,type:number}[];
}

interface ImbaConf {
	index: number;
	getDesc: string;
	img: string;
	imgShadow: string;
	size: string;
	jigsawId: number[];
	power: number;
	id: number;
	winGuide: {0:string,1:string,2:string,3:string,4:string,5:string,6:string,7:string,8:string,9:string,10:string,11:string}[];
	turnDesc: string;
	buttonDesc: string;
	simpleDesc: string;
	count: number;
	computingMode: number;
	imgName: string;
	funcDesc: string;
	model: string;
	name: string;
	attrs: {value:number,type:number}[];
	specialAttr: {value:number,type:number}[];
	exattrs: {value:number,type:number}[];
}

interface ConfigAchievementTask {
	type: number;
	index: number;
	finishwarning: string;
	showType: number;
	achievementType: number;
	desc: string;
	score: number;
	achievementId: number;
	control: number;
	target: number;
	awardList: {id:number,type:number,count:number}[];
	name: string;
	taskId: number;
	startwarning: string;
	controlTarget: {0:string,1:string,2:string,3:string,4:string,5:string,6:string,7:string,8:string,9:string,10:string,11:string}[];
}

interface ConfigZhuanSheng {
	normalItem: number;
	conversionCount: number;
	advanceCount: number;
	normalCount: number;
	normalExp: number;
	advanceExp: number;
	level: number;
	advanceItem: number;
	conversionRate: number;
}

interface ConfigZhuanShengLevel {
	atk: number;
	exp: number;
	res: number;
	level: number;
	hp: number;
	def: number;
}

interface ConfigJingMaiStage {
	attr: {value:number,type:number}[];
	level: number;
	stage: number;
	name: string;
}

interface ConfigJingMaiLevel {
	attr: {value:number,type:number}[];
	level: number;
	count: number;
	itemId: number;
}

interface ConfigJingMaiCommon {
	levelItemChange: number;
	stageMax: number;
	openLevel: number;
	levelMax: number;
	itemid: number;
	levelItemid: number;
	levelPerStage: number;
	levelItemidStage: number;
}

interface ConfigSkillsUpgrade {
	cost: number;
	level: number;
}

interface ConfigSkillsOpen {
	index: number;
	level: number;
}

interface ConfigZhuanShengExp {
	exp: number;
}

interface ConfigNewRole {
	zsLevel: number;
	level: number;
	index: number;
	vip: number;
}

interface ConfigStoneLevelCost {
	soulNum: number;
	level: number;
	stoneId: number;
}

interface ConfigStoneLevel {
	level: number;
	index: number;
	posId: number;
	attr: {value:number,type:number}[];
}

interface ConfigZhulingAttr {
	level: number;
	index: number;
	posId: number;
	attr: {value:number,type:number}[];
}

interface ConfigZhulingCost {
	price: number;
	level: number;
	count: number;
	itemId: number;
}

interface ConfigEnhanceAttr {
	attr: {value:number,type:number}[];
	level: number;
	index: number;
	posId: number;
}

interface ConfigEnhanceCost {
	level: number;
	stoneNum: number;
	stoneId: number;
}

interface ConfigLegendLevelup {
	itemId: number;
	newEquipId: number;
	count: number;
	oldEquipId: number;
}

interface ConfigLegendCompose {
	itemId: number;
	count: number;
	equipId: number;
}

interface ConfigExRing {
	id: number;
	name: string;
	costItem: number;
}

interface ConfigExRing0 {
	extAttrAward: {};
	level: number;
	attrAward: {};
	cost: number;
	power: number;
}

interface ConfigExRing1 {
	extAttrAward: {};
	level: number;
	attrAward: {};
	cost: number;
	power: number;
}

interface ConfigEquipItem {
	id: number;
	discountImg: string;
	count: number;
	itemId: number;
}

interface ConfigItemStore {
	index: number;
	id: number;
	price: number;
	use: string;
	itemId: number;
	vipLimit: {}[];
}

interface ConfigStoreCommon {
	refreshYuanBao: number;
	refreshItem: number;
	refreshCd: number;
	IntegralProportion: number;
	refreshIntegral: number;
	refreshLimit: number;
}

interface IntegralStore {
	type: number;
	index: number;
	use: string;
	price: number;
	showYuanBao: number;
	count: number;
	itemId: number;
}

interface ConfigTreasureOverView {
	id: number;
	itemId: { id: number, type: number, count: number};
}

interface ConfigEffect {
	id: number;
	type: number;
	fileName: string;
}

interface ConfigVip {
	attrAddition: {value:number,type:number}[];
	pfNeedYb: {needYb:number,pf:string}[];
	awards: {id:number,type:number,count:number}[];
	id: number;
	vipImg: string;
	boss2buy: number;
	boss1buy: number;
	description: string;
	needYb: number;
}

interface ConfigShield {
	attr: {value:number,type:number}[];
	name: string;
	exp: number;
	level: number;
	itemId: number;
}

interface ConfigShieldStage {
	attr: {value:number,type:number}[];
	normalCost: number;
	normalCostTip: number;
	normalBaseExp: number;
	stage: number;
	icon: string;
}

interface ConfigLoongSoul {
	attr: {value:number,type:number}[];
	level: number;
	itemId: number;
	exp: number;
}

interface ConfigLoongSoulStage {
	attr: {value:number,type:number}[];
	normalCostTip: number;
	modelId: number;
	normalCost: number;
	scale: number;
	normalBaseExp: number;
	stage: number;
	icon: string;
}

interface ConfigTreasureHunt {
	huntTenth: number;
	huntOnce: number;
	hefuDay: number;
	huntItem: number;
}

interface ConfigTreasureHuntPool {
	index: number;
	reward: {id:number,type:number,count:number}[];
}

interface ConfigTreasureHuntPoolHefu {
	index: number;
	reward: {id:number,type:number,count:number}[];
}

interface ConfigSkirmishRank {
	rewards: {id:number,type:number,count:number}[];
	maxRank: number;
	minRank: number;
}

interface ConfigGainItem {
	gainWay: {0:string,1:string,2:string,3:string,4:string,5:string,6:string,7:string,8:string,9:string,10:string,11:string}[][];
	itemId: number;
}

interface ConfigBagBase {
	baseSize: number;
	rowSize: number;
}

interface ConfigBagExpand {
	row: number;
	cost: number;
}

interface ConfigWorldBoss {
	type: number;
	fbid: number;
	zslook: number[];
	zsLevel: number;
	canRewardshow: {0:number,1:number,2:number,id:number,type:number,count:number}[];
	belongRewardshow: {0:number,1:number,2:number,id:number,type:number,count:number}[];
	level: number;
	showReward: number[];
	bossId: number;
	showName: string;
	samsaraLv: number;
}

interface ConfigWorldBossBase {
	belongMaxCount: number[];
	openLevel: number[];
	dayCount: number[];
	openCheck: number;
	challengeItem: number[];
	canSeeDarkBossDay: number;
	clearCdCost: number[];
	rebornItem: number;
	canSennDarkBoss: number;
	belongCount: number[];
	challengeItemYb: number[];
	shenyuOpenDay: number;
	buyCountPrice: number[];
}

interface ServerTips {
	id: number;
	tips: string;
}

interface ConfigFbChName {
	group: number;
	name: string;
}

interface ConfigAttrPower {
	power: number;
	type: number;
	relate_power: number;
	relate_type: number;
}

interface ConfigTrainLevel {
	itemAward: {};
	type: number;
	power: number;
	exp: number;
	trainlevel: number;
	level: number;
	attrAward: {value:number,type:number}[];
	trainName: string;
}

interface ConfigLoginRewards {
	day: number;
	rewards: {id:number,type:number,count:number}[];
}

interface ConfigActivityType1 {
	index: number;
	rewards: {id:number,type:number,count:number}[];
	Id: number;
	level: number;
	zslevel: number;
	showType: number;
	wingLv: number;
	zzLv: number;
	lhLv: number;
	tjPower: number;
	equipPower: number;
	consumeYuanbao: number;
	huoyanRingLv: number;
	total: number;
	lunhLv: number;
	zhanlingLv: number;
}

interface ConfigActivityType2 {
	needRecharge: number;
	index: number;
	Id: number;
	rewards: {id:number,type:number,count:number}[];
	currencyType: number;
	giftName: string;
	count: number;
	showType: number;
	source: {0:string,1:string,2:string,3:string,4:string,5:string,6:string,7:string,8:string,9:string,10:string,11:string,12:string,13:string,14:string}[];
	price: number;
	vip: number;
	originalPrice: number;
	discount: number;
	shamScount: number;
	limitTime: number[];
	shamScountRed: number[];
	shamScountLimit: number;
	scount: number;
	countReward: {count:number,reward:{id:number,type:number,count:number}[]}[];
}

interface ConfigActivityType6 {
	sort: number;
	bossID: {}[][];
	index: number;
	jump: {0:string,1:string,2:string,3:string,4:string,5:string,6:string,7:string,8:string}[][];
	Id: number;
	rewards: {id:number,type:number,count:number,job:number}[];
	groupName: string;
	giftName: string;
}

interface ConfigActivityType8 {
	index: number;
	rewardsNum: number;
	Id: number;
	rewards: number;
	ybCount: number;
	showType: number;
	cond: number;
}

interface ConfigActivityType7 {
	showType: number;
	index: number;
	title: number;
	Id: number;
	rewards: {id:number,type:number,count:number}[];
	count: number;
	score: number;
	itemCount: number;
	itemId: number;
	exValue: { bossModel: string};
	items: {id:number,count:number}[];
	dailyCount: number;
}

interface ConfigActivity {
	desc: string;
	tabName: string;
	startTime: string;
	Id: number;
	timeType: number;
	endTime: string;
	activityType: number;
	pageStyle: number;
	hfTimes: number;
	pageSkin: string;
}

interface ConfigActivityBtn {
	type: number;
	sort: number;
	activityType: number;
	id: number;
	title: string;
	icon: string;
	light: number;
	timeType: number;
	acDesc: string;
	endTime: string;
	startTime: string;
	showType: number;
	showReward: {id:number,type:number,count:number}[];
	hfTimes: number;
	relyOn: number[];
	pageSkin: string;
	jump: {0:string,1:string,2:string,3:string,4:string,5:string,6:string,7:string,8:string,9:string,10:string,11:string}[];
	pageStyle: number;
}

interface ConfigSkillPower {
	index: number;
	powerPerLevel: number;
}

interface ConfigKnighthood {
	attrs: {value:number,type:number}[];
	type: string;
	effid: number;
	achievementIds: {achieveId:number,taskId:number}[];
	level: number;
	desc: string;
}

interface ConfigKnighthoodBasic {
	actImbaId: number;
	perLevel: number;
}

interface ConfigChongZhi2 {
	type: number;
	day: number;
	openType: number;
	awardList: {id:number,type:number,count:number}[];
	pay: number;
	index: number;
}

interface ConfigRefinesystemExp {
	id: number;
	yuanBao: number;
	exp: number;
}

interface ConfigVipGrid {
	grid: number;
	vip: number;
}

interface ConfigOtherBoss1 {
	llimit: number;
	fbid: number;
	rank2: {id:number,type:number,count:number}[];
	shield: {shield:number,hp:number,reward:number}[];
	hlimit: number;
	bossId: number;
	rankname: {0:string,1:string,2:string,3:string,4:string}[];
	rank4: {id:number,type:number,count:number}[];
	rank3: {id:number,type:number,count:number}[];
	rank1: {id:number,type:number,count:number}[];
	showReward: number[];
	killReward: number;
}

interface ConfigEquipPointConst {
	rankGrowUp: number;
}

interface ConfigEquipPointBasic {
	id: number;
	activationItem: { id: number, count: number};
	name: string;
	activationLevel: number;
}

interface ConfigEquipPointGrowUp {
	attrs: {value:number,type:number}[];
	growUpState: number;
	id: number;
	needLevel: number;
	growUpItem: { id: number, count: number};
	growUpProbability: number;
	star: number;
	growUpId: number;
	level: number;
	rank: number;
}

interface ConfigEquipPointRank {
	id: number;
	rankUpProbability: number;
	rankUpItem: { id: number, count: number};
	rank: number;
}

interface ConfigEquipPointResolve {
	materials: {id:number,type:number,count:number}[];
	itemId: number;
}

interface WanBaGiftbagBasic {
	day: number;
	items: {id:number,type:number,count:number}[];
}

interface ConfigHelpInfo {
	id: number;
	text: string;
}

interface ConfigTianTiConst {
	buyChallengesCountYuanBao: number;
	challengesCountCd: number;
	openLevel: number;
	diamond: { id: number, level: number};
	maxRestoreChallengesCount: number;
	maxBuyChallengesCount: number;
}

interface ConfigTianTiDan {
	winAward: number;
	showDan: number;
	danAward: {id:number,type:number,count:number}[];
	id: number;
	level: number;
	showStar: number;
	showLevel: string;
}

interface ConfigClientGlobal {
	effectItems: {};
}

interface ConfigCashCowBox {
	time: number;
	index: number;
	box: number[];
}

interface ConfigCashCowLimit {
	maxTime: number;
	vip: number;
}

interface ConfigCashCowBasic {
	yuanbao: number;
	time: number;
	gold: number;
}

interface ConfigCashCowAmplitude {
	level: number;
	needExp: number;
	rate: number;
}

interface ConfigGuild {
	openLevel: number;
	commonSkillNames: {0:string,1:string}[];
	posCounts: {}[][];
	buildingTips: {0:string,1:string,2:string,3:string,4:string,5:string,6:string,7:string,8:string,9:string,10:string,11:string,12:string,13:string,14:string,15:string,16:string}[];
	maxMember: number[];
	bonfireItem: number;
	impeachTime: number;
	practiceSkillCount: number;
	skillDesc: {0:string,1:string,2:string,3:string,4:string,5:string,6:string}[];
	impeachCost: number;
	bonfireReward: {id:number,type:number,count:number}[];
	commonSkillCount: number;
	affairMember: number[];
	bonfirecount: number;
	bonfirecaution: number;
	commonSkillLevels: number[];
	practiceSkillLevels: number[];
	bonfireValue: number;
	buildingNames: {0:string,1:string,2:string,3:string}[];
	practiceSkillNames: {0:string,1:string,2:string,3:string}[];
}

interface ConfigGuildCommonSkill {
	1: {value:number,type:number}[];
	attrs: {value:number,type:number}[];
	id: number;
	level: number;
	contribute: number;
	money: number;
}

interface ConfigGuildCreate {
	pfVipLv: {vipLv:number,pf:string}[];
	vipLv: number;
	moneyCount: number;
	level: number;
	award: number;
	moneyType: number;
}

interface ConfigGuildDonate {
	type: number;
	index: number;
	awardFund: number;
	id: number;
	awardContri: number;
	dayCount: number[];
	count: number;
}

interface ConfigGuildLevel {
	type: number;
	upFund: number;
	level: number;
}

interface ConfigGuildTask {
	type: number;
	name: string;
	conID: number;
	id: number;
	desc: string;
	target: number;
	param: number;
	controlTarget: {0:string,1:string,2:string,3:string,4:string,5:string,6:string,7:string,8:string,9:string,10:string,11:string,12:string}[];
}

interface ConfigWelfare {
	panel: number;
	type: number;
	id: number;
	icon: string;
	desc: string;
	activityId: number;
}

interface ConfigOtherBoss2 {
	show: {id:number,type:number,count:number}[];
	name: string;
	levelLimit: number;
	id: number;
	titledes: string;
	challengeTime: number[];
	itemId: number;
}

interface ConfigMiJiGrid {
	zsLevel: number;
	vipLevel: number;
	grid: number;
}

interface ConfigMiJiSkill {
	id: number;
	power: number;
	item: number;
	p1: number;
	p2: number;
	p3: number;
}

interface ConfigMijiBase {
	lockId: number;
}

interface TitleConf {
	keepTime: number;
	type: string;
	Id: number;
	img: string;
	condition: string;
	rare: number;
	name: string;
	level: number;
	sort: number;
	attrs: {value:number,type:number}[];
	eff: string;
}

interface ConfigTrainLevelAward {
	skillname: string;
	exattrs: {value:number,type:number}[];
	id: number;
	level: number;
	icon: string;
	desc: string;
}

interface ConfigTerraceDesc {
	pId: number;
	desc: string;
}

interface WeiXiGuanZhuConst {
	awards: {id:number,type:number,count:number}[];
	context: string;
	head: string;
}

interface GuildBattleLevel {
	fbId: number;
	feats: number;
	name: string;
	help: string;
	id: number;
	switchSceneCd: number;
	resurgenceCd: number;
	btnName: string;
}

interface GuildBattleConst {
	occupationAward: {id:number,type:number,count:number}[];
	openLevel: number;
	gateLotteryWaitTime: number;
	maxDay: number;
	openServer: { min: number, hours: number, day: number};
	memberOccupationAwardHead: string;
	hefuAward: { leader: { award: {id:number,type:number,count:number}[][], context: string, title: string}, normal: { award: {id:number,type:number,count:number}[][], context: string, title: string}};
	gatherTime: number;
	hefuOpen: {min:number,hours:number,day:number}[];
	occupationAwardShow: {id:number,type:number,count:number}[];
	memberOccupationAwardContext: string;
	gateLiveTime: number;
	continueTime: number;
}

interface GuildBattleDayAward {
	day: number;
	award: {id:number,type:number,count:number}[];
}

interface GuildBattleDistributionAward {
	count: number;
	id: number;
	awardShow: {id:number,type:number,count:number}[];
	award: {id:number,type:number,count:number}[];
	rank: number;
	rewardFlag: number;
}

interface GuildBattlePersonalAward {
	id: number;
	award: {id:number,type:number,count:number}[];
	integral: number;
}

interface GuildBattlePersonalRankAward {
	award: {id:number,type:number,count:number}[];
	rank: number;
}

interface FriendLimit {
	chatLv: number;
	contentLimit: number;
	chatsListLen: number;
	blacklistLen: number;
	applyListLen: number;
	friendListLen: number;
	sysLv: number;
}

interface ZhuangBanId {
	attr: {value:number,type:number}[];
	cost: { num: number, itemId: number};
	id: number;
	show_img: string;
	roletype: number;
	dress_name: string;
	sort: number;
	res: string;
	name: string;
	pos: number;
	invalidtime: number;
}

interface ConfigZhuangBan {
	activecontext: string;
	zhuangbanpos: {0:string,1:string}[];
	noticeid: number;
	mailinvalidcontext: string;
	mailinvalidtitle: string;
}

interface FeatsStore {
	shopType: number;
	index: number;
	buyType: number;
	use: string;
	costMoney: { count: number, type: number};
	goods: {id:number,type:number,count:number}[];
	costItem: { id: number, count: number};
	daycount: number;
}

interface ConfigGuildBoss {
	radisLv: number;
	notOpenDayOfWeek: number;
	dayTimes: number;
}

interface ConfigGuildBossInfo {
	fbId: number;
	boss: { posY: number, monId: number, posX: number};
	scale: number;
	ShowImg: string;
	id: number;
	passAwards: {id:number,type:number,count:number}[];
	enterAwards: number;
	killerAwards: {id:number,type:number,count:number}[];
}

interface ConfigGuildBossHpAwards {
	idx: number;
	randTimes: number[];
	awards: {id:number,type:number,count:number}[];
	id: number;
	hpPer: number;
}

interface ConfigGuildBossRank {
	srank: number;
	erank: number;
	awards: {id:number,type:number,count:number}[];
}

interface ConfigGuide {
	guideId: number;
	type: number;
	direction: number;
	tips: string;
	start: { value: number, type: number};
	target: string;
	view: string;
	stepId: number;
	overs: {value:number,type:number}[];
}

interface ConfigTogerherHitBase {
	TogExgRate: number;
	actImbaId: number;
	needCount: number;
}

interface ActorExRingCommon {
	actImbaId: number;
	openlevel: number;
	MaxOutNum: number[];
}

interface ConfigWeaponSoul {
	icon: string;
	name: string;
	pic: {0:string,1:string,2:string,3:string,4:string,5:string,6:string,7:string,8:string,9:string}[];
	id: number;
	outside: {0:string,1:string,2:string,3:string,4:string,5:string,6:string,7:string,8:string,9:string,10:string,11:string,12:string,13:string,14:string}[];
	actcond: number[];
	inside: {0:string,1:string,2:string,3:string,4:string,5:string,6:string,7:string,8:string,9:string,10:string,11:string,12:string,13:string,14:string,15:string,16:string}[];
}

interface ConfigWeaponSoulPos {
	costNum: number;
	name: string;
	costItem: number;
	id: number;
	level: number;
	icon: number;
	showlv: number;
	attr: {value:number,type:number}[];
	assault: number;
}

interface WeaponSoulSuit {
	attr: {value:number,type:number}[];
	skilldesc: string;
	id: number;
	level: number;
	skillname: string;
	skillicon: string;
	ex_attr: {value:number,type:number}[];
}

interface ConfigLoginActivate {
	openDay: number;
	vipLevel: number;
	loginDays: number;
	reward: {id:number,type:number,count:number}[];
	roleCount: number;
}

interface ConfigHeirloomTreasure {
	huntTenth: number;
	huntOnce: number;
	openDay: number;
	openZSlevel: number;
	freeCount: number;
	maxBlissVal: number;
	boxes: {id:number,type:number,count:number}[];
	huntItem: number;
}

interface ConfigHeirloomTreasureReward {
	id: number;
	reward: {id:number,type:number,count:number}[];
	needTime: number;
}

interface ConfigOptionalGift {
	show: {id:number,str:string,reward:{id:number,type:number,count:number}[]}[];
	itemid: number;
	options: {itemcount:number,useGrid:number,level:number,itemid:number,zslimit:number}[];
}

interface ConfigGodweaponItem {
	id: number;
	skill: number[];
	attr: {value:number,type:number}[];
}

interface ConfigGodWeaponLine {
	attr: {value:number,type:number}[];
	upLevel: number;
	maxLevel: number;
	skinId: number;
	lockDesc: string;
	skillName: string;
	iconId: number;
	lineId: number[];
	condition: {}[];
	exPower: number;
	skill: number;
	exattr: {value:number,type:number}[];
	newskill: number;
	passiveskill: number;
}

interface ConfigGodWeaponLevel {
	everyExp: number;
	exp: number;
	attr3: {value:number,type:number}[];
	attr2: {value:number,type:number}[];
	attr1: {value:number,type:number}[];
}

interface ConfigGodWeaponBase {
	weaponItemCount: number;
	mailData: { context: string, head: string};
	openLevel: number[];
	zhuanshengLevel: number;
	godWeaponCount: number;
	noticeDay: number;
	freeCount: number;
	skillResetCost: number;
	noticeSkillId: {}[][];
	needLevel: number;
	noticeOpenLv: number;
	fbGrade: number[];
	fubenItem: number;
	openDay: number;
}

interface ConfigGodWeaponFuben {
	fbId: number;
	award: {id:number,type:number,count:number}[][];
	firstAward: {id:number,type:number,count:number}[];
}

interface ConfigGWSkillRevise {
	targetEff: number[];
	gwIndex: number;
	skill: number;
	desc: string;
	d: number;
	selfEff: number[];
	args: {vals:number[],type:number}[];
	critDamage: number;
	affectCount: number;
	affectRange: number;
}

interface ConfigMoney {
	id: number;
	name: string;
	describe: string;
}

interface ConfigYuPei {
	attrs: {value:number,type:number}[];
	count: number;
	item_id: number;
	level: number;
	deterLevel: number;
}

interface ConfigYuPeiBasic {
	deterDesc: string;
	perLevel: number;
	openLv: number;
}

interface ConfigPassionPoint {
	fbId: number;
	expPoint: {}[][];
	openLv: number;
	lastTimes: number;
	desc: string;
	npcPos: number[];
	sendAwardSec: number;
	rebornCd: number;
	efficiencyDesc: string;
	openTips: string;
	buyRebornCdCost: number;
}

interface ConfigPassionPointAward {
	id: number;
	color: number;
	reward: {id:number,type:number,count:number}[];
	times: number;
}

interface ConfigFbChallengeBase {
	LotteryOpenLevel: number;
}

interface ConfigRole {
	atk: number;
	def: number;
	hp: number;
	job: number;
	ms: number;
	acrit: number;
	tough: number;
	mp: number;
	as: number;
	level: number;
	crit: number;
	res: number;
}

interface ConfigNewFuncNotice {
	icon: string;
	close: number;
	id: number;
	openLv: number;
	open: number;
	pic: string;
}

interface ReincarnationBase {
	openLevel: number;
	levelLimit: number;
	hellsLv: number[];
	headName: {0:string}[];
	hellsName: string;
	animalsLv: number[];
	advanceItem: { id: number, time: number, value: number};
	effectAttrType: number[];
	levelExchangeTimes: number;
	normalItem: { id: number, time: number, value: number};
	ghostsName: string;
	godsName: string;
	humansName: string;
	state: {0:string,1:string}[];
	demigodsLv: number[];
	demigodsName: string;
	animalsName: string;
	ghostsLv: number[];
	equipsList: {}[][];
	humansLv: number[];
	godsLv: number[];
}

interface ReincarnationExchange {
	value: number;
	Level: number;
}

interface ReincarnationLevel {
	attrs: {value:number,type:number}[];
	level: number;
	consume: number;
}

interface ReincarnateSpirit {
	attrs: {value:number,type:number}[];
	level: number;
	consume: number;
	slot: number;
}

interface ReincarnateSuit {
	attrs: {value:number,type:number}[];
	level: number;
	ex_power: number;
	exAttrs: {value:number,type:number}[];
}

interface ReincarnateEquip {
	id: number;
	exp: number;
}

interface ConfigEquipWithEff {
	offX: number;
	inShowEff: string;
	nextShowEff: string;
	id: string;
	scaling: number;
	offY: number;
}

interface PrestigeBase {
	recycle: string;
	normalDeterDam: number;
	openLevel: number;
	cost: number;
	rankDeterDam: number[];
	skillTips: string[];
	topThree: {des:string, res:string}[];
	openDay: number;
}

interface PrestigeLevel {
	attr: {value:number,type:number}[];
	name: string;
	exp: number;
	level: number;
	res: string;
	retrieve: number;
}

interface ConfigActivityType11_1 {
	showText: string;
	index: number;
	mailInfo: { context: string, head: string};
	id: number;
	showType: number;
	score: number;
	reward: {id:number,type:number,count:number}[];
}

interface ConfigActivityType11_2 {
	type: number;
	index: number;
	id: number;
	gName: string;
	group: number;
	day: number;
	name: string;
	dayImg: string;
	target: number;
	dayLimit: number;
	score: number;
	reward: {id:number,type:number,count:number}[];
	turn: {0:string,1:string,2:string,3:string,4:string,5:string,6:string,7:string,8:string}[];
	param: number;
	rate: number;
}

interface ReincarnateEquipCompose {
	id: number;
	material: { id: number, count: number};
	distinguishi: number;
}

interface ConfigSpecialEquips {
	id: number;
	style: number;
}

interface ReincarnationSoulLevel {
	attrs: {value:number,type:number}[];
	demonLevel: number;
	slot: number;
	soulLinkLevel: number;
	level: number;
	materialInfo: { id: number, count: number};
	job: number;
}

interface ReincarnationDemonLevel {
	precent: number;
	level: number;
	slot: number;
}

interface ReincarnationLinkLevel {
	attrs: {value:number,type:number}[];
	level: number;
	firstSlot: number;
	secondSlot: number;
}

interface PeakRaceBase {
	KnockOutTime: number;
	openTime: string;
	likeCount: number;
	promInterval: number;
	interval: number;
	likeScore: number;
	mobaiChips: number;
	openDay: number;
	mobaiNum: number;
	exchangeItems: number[];
	singleRewards: {id:number,type:number,count:number}[];
	croosRewards: {id:number,type:number,count:number}[];
	crossRelTime: number;
	crossWinMail: number;
	winMail: number;
	promWin: number;
	needZsLv: number;
	signUpLose: number;
}

interface PeakRaceTime {
	status: number;
	relTime: number;
	loseMail: number;
	maxBett: number;
}

interface PeakRaceCrossTime {
	status: number;
	relTime: number;
	loseMail: number;
	maxBett: number;
}

interface ConfigActivityType19 {
	activityID: number;
	index: number;
	showType: number;
	Id: number;
	rewards: {id:number,type:number,count:number}[];
	range: number[];
	condition: number;
}

interface ConfigActivityType18 {
	Id: number;
	showType: number;
	index: number;
	showDrop: {id:number,type:number,count:number}[];
	yb: number;
	count: number;
	itemCount: number;
	item: number;
}

interface ConfigHeartMethodStar {
	attr: {value:number,type:number}[];
	posItem: number;
	nextItem: number;
	splitNum: number;
	heartmethodId: number;
	posSort: number;
	costItem: number;
	effect: string;
	bigIcon: string;
	costNum: number;
	star: number;
	posId: number;
	quality: number;
	power: number;
}

interface GuardGodWeaponConf {
	fbId: {}[];
	privilegeSweepZsLimit: number;
	sSkillIcon: {0:string,1:string,2:string,3:string,4:string,5:string,6:string,7:string}[];
	gwMonPos: number[];
	fbMaxMon: number;
	opencondition: number[];
	UIshowDropNotice: string;
	starDelayRsf: number;
	UIshowDrop: {0:string,1:string,2:string,3:string,4:string,5:string,6:string,7:string}[];
	sSkillCd: number[];
	sBoss: {}[][];
	sBossAward: {}[];
	showReward: {}[][];
	cHead: string;
	noticeId: {}[];
	sbContext: string;
	sbHead: string;
	sSummonCost: number[];
	sSummonLimit: {}[];
	cbHead: string;
	gwMonId: number;
	sSummonPos: {}[][];
	sSkillCost: number[];
	recoverCD: number;
	sSkillVal: {}[][];
	cContext: string;
	dailyCount: number;
	cBossAward: {}[];
	cbContext: string;
	sSkillUseText: {0:string,1:string,2:string,3:string,4:string,5:string,6:string,7:string,8:string,9:string,10:string,11:string}[];
}

interface GGWWaveConf {
	zsLvl: number;
	time: number;
	idx: number;
}

interface ConfigJadePlateBase {
	openlv: number;
	perLevel: number;
	openDay: number;
	skillIcons: number[];
	upgradeInfo: {attr:{value:number,type:number}[],precent:number}[];
	itemInfo: {}[];
	skillUnlock: {id:number,name:string,desc:string}[];
}

interface ConfigJadePlateLevel {
	attrs: {value:number,type:number}[];
	level: number;
	upgradeItemInfo: {}[];
	exp: number;
	skillIdList: number[];
	exAttrs: {value:number,type:number}[];
}

interface ConfigHeartMethodBase {
	zsLv: number;
	proShowList: {id:number,name:string,filter:number}[];
	starMax: number;
	serverDay: number;
}

interface ConfigHeartMethod {
	blankIcon: {0:string,1:string,2:string,3:string,4:string,5:string,6:string,7:string,8:string}[];
	id: number;
	skillButton: string;
	inside: string;
	sort: number;
	openTips: string;
	name: string;
	posList: number[];
	skillShowPic: string;
	splitItem: number;
	icon: string;
	pic: string;
	openCondition: { day: number, zs: number};
	upGradeCondition: number;
	posGainGuide: number;
}

interface ConfigHeartMethodPos {
	posItem: number;
	star: number;
	quality: number;
	pos: number;
}

interface ConfigHeartMethodLevel {
	id: number;
	level: number;
	attr: {value:number,type:number}[];
	costNum: number;
	costItem: number;
	power: number;
}

interface ConfigHeartMethodStage {
	id: number;
	normalCostTip: number;
	stage: number;
	attr: {value:number,type:number}[];
}

interface ConfigHeartMethodSuit {
	attr: {value:number,type:number}[];
	skilldesc: string;
	id: number;
	level: number;
	skillname: string;
	inside: string;
	power: number;
}

interface ZhiZunEquipLevel {
	attrs: {value:number,type:number}[];
	slot: number;
	materialInfo: { id: number, count: number};
	headTxt: string;
	showPower: number;
	ex_power: number;
	level: number;
	soulLinkLevel: number;
	skillId: number;
}

interface ZhiZunLinkLevel {
	attrs: {value:number,type:number}[];
	chainDesc: string;
	ex_power: number;
	level: number;
	firstSlot: number;
	secondSlot: number;
	exAttrs: {value:number,type:number}[];
}

interface CrossBossBase {
	belongMaxCount: number;
	openDay: number;
	flagBelongMaxCount: number;
	flagId: number;
	needTime: number;
	bossBelongCount: number;
	showBoss: string;
	rebornCost: number;
	flagRefreshTime: number;
	rebornCd: number;
	cdTime: number;
	flagBelongCount: number;
	bossBelongMaxCount: number;
}

interface ConfigCrossBoss {
	bossId: number;
	belongRewardshow: {id:number,type:number,count:number}[];
	fbid: number;
	levelLimit: number[];
	id: number;
	refreshNoticeId: number;
	refreshTime: number;
	sceneName: string;
}

interface ZhuangBanLevelUp {
	id: number;
	level: number;
	attr: {value:number,type:number}[];
	cost: { num: number, itemId: number};
}

interface ConfigActivityType20 {
	rankReward: {head:string,start:number,endi:number,context:string,reward:{id:number,type:number,count:number}[]}[];
	monsterId: { id: number, scale: number, monster: string};
	index: number;
	openTime: number;
	Id: number;
	duration: number;
	showReward: {id:number,type:number,count:number}[];
	enterTime: number;
}

interface ConfigActivityType22_1 {
	Id: number;
	freshItem: number;
	showType: number;
	freshPrice: number;
	costItem: number;
}

interface ConfigActivityType22_3 {
	low: number;
	score: number;
	id: number;
	high: number;
	showReward: {discountImg:number,type:number,count:number,cost:number,id:number}[];
}

interface ConfigHideBoss {
	bossId: number;
	rewardShow: number[];
}

interface DevilBossBase {
	openDay: number;
	partSaleAwards: {id:number,type:number,count:number}[];
	cdTime: number;
	belongSaleAwards: {id:number,type:number,count:number}[];
	rebornCost: number;
	belongAwards: {id:number,type:number,count:number}[];
	rebornCd: number;
	startTime: number[];
	partAwards: {id:number,type:number,count:number}[];
	hefuTimeLimit: number;
}

interface ConfigDevilBoss {
	id: number;
	bossName: string;
	openBossList: number[];
	levelLimit: number;
}

interface ConfigAuction {
	rushTime: number;
	sellFailureContent: string;
	globalShowTime: number;
	globalTax: number;
	sellSuccessContent: string;
	openserverday: number;
	sellSuccessTitle: string;
	falseHints: {0:string,1:string,2:string,3:string,4:string,5:string}[];
	eachPageNumber: number;
	sellSuccessGuildContent: string;
	openzhuanshenglv: number;
	priceIncrease: number;
	sellSuccessGuildTitle: string;
	exceedTitle: string;
	positiveParameter: number;
	exceedContent: string;
	buySuccessContent: string;
	guildShowTime: number;
	sellFailureTitle: string;
	quotaMax: number;
	buySuccessTitle: string;
	guildTax: number;
}

interface AuctionItem {
	item: { id: number, type: number, count: number};
	globalTime: number;
	id: number;
	guildTime: number;
	bid: number;
	buy: number;
}

interface HunGuConf {
	hunyuType: {}[][];
	hunguName: {0:string,1:string}[];
	unlockCost: {}[];
	equipCount: number;
	suitName: {0:string,1:string,2:string,3:string,4:string,5:string,6:string,7:string,8:string,9:string,10:string,11:string,12:string,13:string,14:string,15:string,16:string,17:string,18:string,19:string,20:string,21:string,22:string}[][];
	showzhuanshenglv: number;
	fbOpenDay: number;
	dayRewardCount: number;
	openzhuanshenglv: number;
	showZsLv: number;
	suit: {0:number,1:number,2:number,3:number,4:number,5:number}[];
	gainItemId: number;
	hunyuCount: number;
	sweepLayer: number;
	canFenjieItem: {};
	needZsLv: number;
	openserverday: number;
}

interface HunGuEquip {
	attrs: {value:number,type:number}[];
	type: number;
	hunyuNum: number;
	id: number;
	addStageCost: {id:number,type:number,count:number}[];
	stage: number;
	nextId: number;
}

interface HunYuEquip {
	attrs: {value:number,type:number}[];
	name: string;
	cost: { id: number, type: number, count: number};
	id: number;
	level: number;
	icon: string;
}

interface HunGuSuit {
	count: number;
	effectId: string;
	id: number;
	dec: string;
	stage: number;
	specialAttrs: number;
	attrs: {value:number,type:number}[];
	expower: number;
}

interface ConfigFsFb {
	idx: number;
	zsLevelLimit: number;
	pic: string;
	monster: number;
	fbId: number;
	award: {id:number,type:number,count:number}[];
	fbName: string;
}

interface ConfigInstanceBase {
	maxCheckPoint: number;
}

interface ConfigMultiDayRecharge {
	id: number;
	num: number;
	awardList: {id:number,type:number,count:number}[][];
}

interface CrossArenaBase {
	flagBossId: number;
	winScore: number;
	openLevel: number;
	lowestScore: number;
	joinCount: number;
	everyDayAward: {award:{id:number,type:number,count:number}[],metal:number}[];
	scoreMetal: number[];
	peakItemId: number;
	assistsTime: number;
	instScore: number;
	needGatherTime: number;
	finalAward: {mail:{tAwardList:{id:number,type:number,count:number}[],context:string,head:string},metal:number}[];
	openDay: number;
	zhuanshengLevel: number;
	worldInvitationCd: number;
	peakCountInfo: { winCount: number, firstGatherCount: number, mvpCount: number, loseCount: number, firstKillCount: number, drawCount: number};
	teamScoreRange: number;
	peakAwards: {count:number,award:{id:number,type:number,count:number}[]}[];
	rankAward: {mail:{tAwardList:{id:number,type:number,count:number}[],context:string,head:string},rankIdx:number}[];
	gatherScore: number;
	rebornCd: number;
	flagRefreshTime: number;
	lastTime: number;
	maxJoinCount: number;
	killScore: number;
}

interface ConfigUpdateRemind {
	serverDayLimit: number;
	disappearTime: string;
	appearTime: string;
	appearLv: number;
	lotteryNotice: string;
}

