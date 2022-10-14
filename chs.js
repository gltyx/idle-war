/*

 @name    : 锅巴汉化 - Web汉化插件
 @author  : 麦子、JAR、小蓝、好阳光的小锅巴
 @version : V0.6.1 - 2019-07-09
 @website : http://www.g8hh.com
 @idle games : http://www.gityx.com
 @QQ Group : 627141737

*/

//1.汉化杂项
var cnItems = {
    _OTHER_: [],

    //未分类：
    'Save': '保存',
    'Export': '导出',
    'Import': '导入',
    'Settings': '设置',
    'Achievements': '成就',
    'Statistics': '统计',
    'Changelog': '更新日志',
    'Hotkeys': '快捷键',
    'ALL': '全部',
    'Default': '默认',
    'AUTO': '自动',
    'default': '默认',
    "points": "点数",
    "Reset for +": "重置得到 + ",
    "Currently": "当前",
    "Effect": "效果",
    "Cost": "成本",
    "Goal:": "目标:",
    "Reward": "奖励",
    "Start": "开始",
    "Exit Early": "提前退出",
    "Finish": "完成",
    "Milestone Gotten!": "获得里程碑！",
    "Milestones": "里程碑",
    "Completed": "已完成",
    "Achievement Gotten!": "成就达成！",
    "Click to start": "点击开始",
    "Global XP": "全局经验",
    "Home": "基地",
    "Idle War": "太空大战放置",
    "Points": "点数",
    "Saving game...": "保存游戏...",
    "Version": "版本",
    "Welcome back": "欢迎回来",
    "Click anywhere on the message to dismiss the box.": "单击消息上的任意位置以关闭该框。",
    "Title": "标题",
    "Welcome to Idle War": "欢迎来到战争放置",
    "Some text": "一些文本",
    "From time to time, messages like these will show up to guide you trough the game, or giving you information about something that happened, like a new piece of equipment found, or story progression.": "不时会出现类似这样的消息，以引导您完成游戏，或为您提供有关发生的事情的信息，例如发现的新装备或故事进展。",
    "(level up available)": "（可升级）",
    "About": "关于",
    "and any": "和任何",
    "Attack": "攻击",
    "Bonus": "奖励",
    "Continue mission": "继续任务",
    "Health": "生命值",
    "Manage your unlocked ships, and upgrade their equipment": "管理您未锁定的飞船，并升级他们的装备",
    "On this screen you can view your ships, change and level up the equipment, and level up your ship. Leveling up the ship increases the": "在此屏幕上，您可以查看您的飞船、更改和升级装备以及升级您的飞船。 提升飞船等级会增加",
    "Reset": "重置",
    "Ships": "飞船",
    "Spend your points in global upgrades that will greatly improve your ship's performance": "将您的点数用于全局升级，这将大大提高您的船舶性能",
    "Start new mission": "开始新任务",
    "the ship has.": "这艘船有。",
    "Upgrades": "升级",
    "Your ships": "您的飞船",
    "Neverending mission to farm equipment and XP. First time you kill a boss you will get a guaranteed equipment piece. Complete stage 50 to unlock the next difficulty and the ability to skip stages up to 90% of your highest stage reached on each difficulty setting (rounded down to the nearest 10 plus 1).": "永无止境的装备和 经验 任务。 首次击杀 Boss 时，您将获得一件低保装备。 完成第 50 关可解锁下一个难度，并且可以跳过每个难度设置所达到的最高关卡的 90%（向下舍入到最接近的 10 加 1）。",
    "As the city is successfully defended from the invading forces, new information is reaching the headquarters.": "随着城市成功防御入侵部队，新的信息正在到达总部。",
    "Attack mode": "攻击模式",
    "Attack speed": "攻击速度",
    "Audio": "声音的",
    "Auto fill ships": "自动填充船",
    "Background music: on": "背景音乐：开",
    "Bonus points:": "奖励点数：",
    "Bonus XP:": "额外经验：",
    "Chapter I - Awakening": "第一章 - 觉醒",
    "Chapter II - Defend the base": "第二章 - 保卫基地",
    "Chapter III - City defense": "第三章 - 城市防御",
    "Chapter IV - New developments": "第四章 - 新的发展",
    "Chapter V - Intelligence gathering": "第五章 - 情报收集",
    "Choose one the missions to start a new adventure. Good luck Commander!": "选择一个任务开始新的冒险。祝指挥官好运！",
    "Choose your ships and get ready to start the mission below.": "选择你的船，准备开始下面的任务。",
    "closest": "最接近",
    "Difficulties completed:": "已完成的难度：",
    "Difficulty": "难度",
    "Dmg reduction": "减伤",
    "Ending the mission": "结束任务",
    "Enemies have 10x Health points and Damage, and you earn 3x XP and mission rewards.": "敌人有 10 倍的生命值和伤害，你可以获得 3 倍的 XP 和任务奖励。",
    "Enemies have 4x Health points and Damage, and you earn 2x XP and mission rewards.": "敌人有 4 倍的生命值和伤害，你获得 2 倍的 XP 和任务奖励。",
    "Enemy DPS:": "敌人DPS：",
    "Enemy focus": "敌人焦点",
    "Enemy Health:": "敌人生命值：",
    "Export save game": "导出游戏存档",
    "Freeplay": "自由游戏",
    "Game speed: 1x": "游戏速度：1x",
    "Graphical / Performance": "图形/性能",
    "Hard": "困难",
    "Highest stage:": "最高关卡：",
    "Import save game": "导入存档游戏",
    "Insane": "疯狂",
    "Manual rounds": "手动轮次",
    "Miscellaneous": "各种各样的",
    "None": "无",
    "Normal": "正常",
    "Notifications: on": "通知：开启",
    "Options": "选项",
    "Required stage:": "要求关卡：",
    "Run on background: off": "在后台运行：关闭",
    "Select another mission": "选择另一个任务",
    "Select ship": "选择船",
    "selected": "选择",
    "Ship DPS:": "船舶DPS：",
    "Ship Health:": "船舶生命值：",
    "Ship slots:": "船槽：",
    "Something is happening on our solar system. All of a sudden, a lot of ships just started closing on our planets. What could they want?": "我们的太阳系正在发生一些事情。突然之间，许多飞船开始在我们的星球上靠近。他们想要什么？",
    "Sound effects: on": "音效：开",
    "Stargazer": "观星者",
    "Start mission": "开始任务",
    "They have double back and are attacking one of our cities. They are defenceless and we must help!": "他们有双后援，正在攻击我们的一个城市。他们手无寸铁，我们必须提供帮助！",
    "They just started opening fire on us. We need to try to fight them off.": "他们刚刚开始向我们开火。我们需要努力击退他们。",
    "Volume I - The arrival": "第一卷 — 到来",
    "We must find out who they are and what they want. We are taking heavy losses and this can't continue.": "我们必须找出他们是谁以及他们想要什么。我们正在遭受重大损失，而且这种情况无法继续。",
    "While we were busy fighting the first wave of enemies, some managed to evade us and are now attacking one of our bases.": "当我们忙于与第一波敌人作战时，有些人设法避开了我们，现在正在攻击我们的一个基地。",
    "XP Gain:": "经验增益：",
    "You can end the mission any time by clicking on the 'Complete Mission' button on the top bar.": "您可以通过单击顶部栏上的“完成任务”按钮随时结束任务。",
    "Active slots": "活动插槽",
    "All your ships have been disabled. Do you want to try again, or end the mission? Game will automatically try again in 10 seconds...": "你所有的飞船都被禁用了。 你想再试一次，还是结束任务？ 游戏会在 10 秒后自动重试...",
    "Bonus text": "奖励文本",
    "Bonuses": "奖励",
    "Click to switch between Mission XP and Global XP": "点击以在 任务经验 和 全局经验 之间切换",
    "Complete": "已完成",
    "Complete mission": "完成任务",
    "Continue": "继续",
    "End mission": "结束任务",
    "Enemies killed:": "杀死的敌人：",
    "Equipment available": "可用装备",
    "Equipment name": "装备名称",
    "Equipment won": "获得的装备",
    "Exit": "退出",
    "FIRE": "开火",
    "Increase all ships damage by": "增加所有飞船的伤害",
    "Journal": "日志",
    "Kills": "击杀",
    "level": "等级",
    "Mission": "任务",
    "Mission completed!": "任务已完成！",
    "Mission XP": "任务经验",
    "Name": "名称",
    "Points:": "点数：",
    "Reached stage 2": "达到第 2 关卡",
    "Required stage reached": "达到所需关卡",
    "Save &": "保存 ＆",
    "Ship": "飞船",
    "Ships disabled": "船舶禁用",
    "Stage - Normal": "关卡 - 正常",
    "Stage info": "舞台信息",
    "The game will reset, but you can then spend XP on upgrades, making your ships more powerful.": "游戏将重置，但您可以将 XP 用于升级，让您的战舰更强大。",
    "The ships approaching are trying to breach through our defenses. Stop them from coming through!": "接近的飞船正试图突破我们的防御。 阻止他们通过！",
    "Time played:": "出场时间：",
    "Try again": "再试一次",
    "View": "查看",
    "XP gained:": "获得的经验值：",
    "You do not have enough XP to purchase an upgrade for this ship": "你没有足够的 XP 来购买这艘船的升级",
    "You have completed the mission. Do you wish to continue to kill more enemies and earn more XP, or complete the mission?": "你已经完成了任务。 你想继续杀死更多的敌人并获得更多的经验，还是完成任务？",
    "You have earned": "你得到了",
    "Activates and increases the damage dealt by auto fire": "激活并增加自动射击造成的伤害",
    "Aggressive stance": "激进的立场",
    "Auto fire": "自动开火",
    "Auto fire damage dealt:": "造成的自动火焰伤害：",
    "Auto loader": "自动装载机",
    "Current bonus timer reduction:": "当前奖励计时器减少：",
    "Current drop rate:": "当前掉率：",
    "Enemies HP reduction:": "敌人HP减少：",
    "Extra manual rounds:": "额外的手动回合：",
    "Increase the damage of all ships": "增加所有飞船的伤害",
    "Increase the HP of all ships": "增加所有飞船的HP",
    "Increase the number of manual fire rounds a ship has available": "增加飞船可用的手动射击弹数",
    "Increase the probability of getting an equipment piece after fighting a boss": "增加与Boss战斗后获得装备碎片的概率",
    "Increase the XP received": "增加获得的 XP",
    "Know your enemy": "了解你的敌人",
    "Lucky charm": "幸运符",
    "Metal composites": "金属复合材料",
    "Practice makes it perfect": "熟能生巧",
    "Reduce enemies HP": "减少敌人HP",
    "Reduce the cost to level up ships": "降低升级飞船的成本",
    "Reduce the trigger interval of ship bonuses": "减少飞船加成的触发间隔",
    "Requirements": "要求",
    "Reset upgrades": "重置升级",
    "Scholar": "学者",
    "Ship damage increase:": "飞船伤害增加：",
    "Ship HP increase:": "飞船HP增加：",
    "Ship level up cost reduction:": "船舶升级成本降低：",
    "Smart projectiles": "智能射弹",
    "XP increase:": "经验增加：",
    "Not enough points to purchase this upgrade": "点数不足，无法购买此升级",
    "You must unlock all the requirements before purchasing this upgrade": "在购买此升级之前，您必须解锁所有要求",
    "Achievements unlocked:": "解锁成就：",
    "Boss kills:": "BOSS击杀：",
    "Boss slayer I": "Boss杀手 I",
    "Boss slayer II": "Boss杀手 II",
    "Boss slayer III": "Boss杀手 III",
    "Bruiser": "粉碎者",
    "Bruiser focus I": "粉碎者焦点 I",
    "Bruiser focus II": "粉碎者焦点 II",
    "Bruiser focus III": "粉碎者焦点 III",
    "Complete 100 freeplay runs (stage 50+ required)": "完成 100 次免费游戏（需要关卡 50 以上）",
    "Complete 20 freeplay runs (stage 50+ required)": "完成 20 次免费游戏（需要关卡 50 以上）",
    "Complete 5 freeplay runs (stage 50+ required)": "完成 5 次免费游戏（需要关卡 50 以上）",
    "Current drop rate for equipment is 10% (10% base + 0% bonus)": "目前装备的掉落率为 10%（10% 基础 + 0% 奖励）",
    "Damage given:": "造成的伤害：",
    "Damage prevented:": "抵挡的伤害：",
    "Damage received:": "受到的伤害：",
    "Destroyer I": "驱逐舰 I",
    "Destroyer II": "驱逐舰 II",
    "Destroyer III": "驱逐舰 III",
    "Drop rate": "掉率",
    "Free highest stage:": "最高自由关卡：",
    "Free play completed (stage 50+ required):": "免费游戏已完成（需要关卡 50 以上）：",
    "Freeplay - grinder": "自由游戏 - 粉碎机",
    "Freeplay - Learning ropes": "自由游戏 - 学习绳索",
    "Freeplay - Mission entrepreneur": "自由游戏 - 使命企业家",
    "Freeplay - Mission farmer": "自由游戏 - 任务开荒",
    "Freeplay - Mission helper": "自由游戏 - 任务助手",
    "Freeplay - On a mission": "自由游戏 - 执行任务",
    "Freeplay - Will it even end?": "自由游戏 — 它甚至会结束吗？",
    "Global": "全局",
    "Have you had enough?": "你受够了吗？",
    "Hits on player ships:": "玩家飞船上的命中：",
    "Hits on target:": "命中目标：",
    "Hits taken:": "被命中：",
    "HP healed:": "生命值治愈：",
    "I   ll need some assistance please": "我需要一些帮助",
    "In progress": "进行中",
    "It's full of projectiles": "它充满了弹丸",
    "Kills:": "击杀：",
    "Medic!!!": "医生！！！",
    "Mission focused!": "专注于使命！",
    "Missions completed:": "完成的任务：",
    "More xp please": "更多 经验值 请",
    "On a mission": "任务中",
    "Points earned:": "获得的点数：",
    "Relief": "拯救者",
    "Relief focus I": "拯救者焦点 I",
    "Relief focus II": "拯救者焦点 II",
    "Relief focus III": "拯救者焦点 III",
    "Round, round, round we go": "绕，绕，绕，我们走",
    "Stages completed:": "完成的关卡：",
    "Stargazer focus I": "观星者焦点 I",
    "Stargazer focus II": "观星者焦点 II",
    "Stargazer focus III": "观星者焦点 III",
    "That tickles!": "好痒！",
    "This is really useful": "这真的很有用",
    "This will be useful": "这将很有用",
    "Total play time:": "总游玩时间：",
    "Unlocked": "已解锁",
    "Was that meant for me?": "那是给我的吗？",
    "XP earned:": "获得的经验：",
    "off": "关闭",
    "on": "打开",
    "5hp every 5 seconds": "5 生命值 每隔 5 秒",
    "Common": "常见",
    "Damage increase": "伤害增加",
    "Damage reduction": "伤害减少",
    "Equipment": "装备",
    "Equipment not found. Play more missions to unlock it.": "未找到装备。 玩更多的任务来解锁它。",
    "Heals all ships": "治愈所有飞船",
    "Increase all ships health by": "将所有飞船的生命值提高",
    "Level up": "升级",
    "locked": "未解锁",
    "stronger": "更强的",
    "XP boost": "经验提升",
    "Something doesn't feel right. It's like something bigger is comming...": "感觉有些不对劲。 好像有什么大事要来了……",
    "You can now spend the XP earned on leveling up your ships": "您现在可以将获得的 经验值 用于升级您的船只",
    "Assets": "素材",
    "As you kill a Boss, there is a chance of getting a piece of equipment for your ship. The first time you kill a boss on a specific stage, the drop is guaranteed. Click on your ship to view and change the equipment. Can also be done from the main menu.": "当你杀死一个 Boss 时，就有机会为你的船获得一件装备。 第一次在特定关卡击杀boss时，掉落是有保底的。 单击您的船以查看和更改装备。 也可以从主菜单完成。",
    "Basic": "基础",
    "BOSS": "BOSS",
    "Buy equipment box": "购买装备箱",
    "Damage increase level": "伤害提升等级",
    "Damage reduction level": "伤害降低等级",
    "Equipment found for Stargazer with a probability of 100%.": "以 100% 的概率为 观星者 找到装备。",
    "Equipment must be at least level 10 before you can upgrade the quality.": "装备必须至少达到 10 级才能升级品质。",
    "Global damage reduction": "全局伤害减免",
    "Global health increase": "全局生命值增长",
    "Health increase": "生命值增加",
    "Incoming BOSS!!!": "BOSS来袭！！！",
    "Install on slot": "安装在插槽上",
    "Intermediate": "中级",
    "Is that a transmission? ....Br...r... help ... now...": "那是传送吗？ ....Br...r...帮助...现在...",
    "points.": "点数。",
    "Pro": "Pro",
    "ship": "飞船",
    "That was a difficult boss. Let's keep pushing those ships away!": "那是一个难缠的B'o's's。 让我们继续推开那些船！",
    "You do not have enough XP to purchase this equipment box": "你没有足够的 经验值 来购买这个装备箱",
    "You found me! I pilot the Bruiser, a Tank ship. I'll join you and together we can find out what is going on here!": "你发现我了！ 我驾驶 粉碎者，一艘坦克船。 我会加入你，我们可以一起找出这里发生了什么！",
    "You have also earned the following unlocks:": "您还获得了以下解锁：",
    "Your first equipment": "您的第一件装备",
    "Armor stasis field": "护甲停滞场",
    "Defend the shipyard. They can't destroy it.": "保卫造船厂。 他们不能摧毁它。",
    "Equipment found for Bruiser with a probability of 100%.": "以 100% 的概率为 粉碎者 找到装备。",
    "Everyone be ready! We can't lose this base to them!": "大家准备好！ 我们不能把这个基地丢给他们！",
    "Global attack speed": "全局攻击速度",
    "Good job. They are moving away! Wait, nooooo. They are going after the shipyard. Follow them!": "好工作。 他们要搬走了！ 等等，不。 他们正在追捕造船厂。 跟着他们！",
    "Hi. I'm the pilot of the Healer, a Support ship. This was getting difficult for me. Thank you for the help. The least I can do is join your group.": "你好。我是治疗者号的领航员，一艘支援舰。这对我来说越来越难了。谢谢你的帮助。至少我能加入你们的团队。",
    "Mission has ended. You can carry on destroying enemy ships for XP.": "任务已经结束。 您可以继续摧毁敌舰以获得 经验值。",
    "Smart projectiles level": "智能射弹等级",
    "There, it looks like that ship is in trouble. Let's help it!": "在那里，看起来那艘船有麻烦了。 让我们帮助它！",
    "They are still coming. And seems like they brought some new    friends   .": "他们还在来。 似乎他们带来了一些新朋友。",
    "Alright everyone, let's push through and get to the city as soon as possible.": "好了各位，让我们继续前进，尽快到达城里。",
    "Lets see what is out there.": "让我们看看外面有什么。",
    "We have to make our way to the headquarters. It seems they have discovered new information!": "我们必须前往总部。 他们似乎发现了新的信息！",
    "How far can you get? Test yourself, push yourself and keep on earning XP!": "你能达到多远？ 测试自己，推动自己，继续获取 经验值！",
    "Stage - Hard": "关卡 - 困难",
    "These are upgrades you can buy with points. Earn points by completing missions or unlocking achievements.": "这些是您可以用点数购买的升级。 通过完成任务或解锁成就来赚取点数。",
    "Here you can track your progress in achieving certain milestones. When you achieve one of them, you will be rewarded points to be spent on upgrades.": "在这里，您可以跟踪实现某些里程碑的进度。 当您达到其中之一时，您将获得用于升级的奖励点数。",
    ". As you fight off different waves, they will get stronger, and now and then an harder enemy, the Boss, will show up.": ". 当你击退不同的波次时，它们会变得更强大，并且不时会出现一个更强大的敌人，Boss。",
    "button. Earn upgrade points and unlock the": "按钮。 赚取升级点数并解锁",
    "from the": "从",
    "For your ship to fire, click on the": "要让您的船开火，请点击",
    "Upgrades menu": "升级菜单",
    "Your first mission": "你的第一个任务",
    "All upgrades were reset and all points refunded.": "所有升级均已重置，所有点数均已退还。",
    "Aggressive stance level": "激进的立场等级",
    "Global damage reduction level": "全局伤害减免等级",
    "We are here. It doesn't look like there has been a lot of destruction. This is a good thing.": "我们在这儿。 看起来破坏并不大。 这是一件好事。",
    "XP boost level": "经验值提升等级",
    "Attack speed level": "攻击速度等级",
    "We are almost there, just a final push and the city will be safe from the invaders.": "我们快到了，只要最后一击，这座城市就会远离入侵者。",
    "achievement and earned": "成就和获得",
    "Achievement unlocked": "成就解锁",
    "Health increase level": "生命值提高等级",
    "point(s)": "点数",
    "You have unlocked the": "你解锁了",
    "You have unlocked the This will be useful achievement and earned 1 point(s)": "您已解锁“这将是有用的成就”并获得 1 点数",
    "Equipment found for Relief with a probability of 100%.": "以100%的概率找到救援装备。",
    "We should make a detour, this is taking too long.": "我们应该绕道而行，这花费的时间太长了。",
    "Oh, what a great detour you found for us. It's full of enemies! This is going to take forever!": "哦，你为我们找到了一个多么好的弯路。 到处都是敌人！ 这将永远持续下去！",
    "We are getting closer to the headquarters, we can almost see it in the horizon.": "我们越来越接近总部，我们几乎可以在地平线上看到它。",
    "We might have found where they come from. Make your way to the shipyard, rearm and go investigate on these coordinates.": "我们可能已经找到了它们的来源。 前往造船厂，重新武装并调查这些坐标。",
    "Are we ever going to find them?": "我们会找到他们吗？",
    "Global health increase level": "全局生命值提高等级",
    "Here's the shipyard. Seems we attracted some more enemies here. Let's fight them off and prepare to jump to space.": "这里是造船厂。 看来我们在这里吸引了更多的敌人。 让我们与他们战斗并准备跳入太空。",
    "Armor stasis field level": "装甲停滞场等级",
    "Where are they coming from? All we see is the blackness of space.": "他们来自哪里？ 我们所看到的只是空间的黑暗。",
    "This doesn't look right. There's something odd approaching, I can feel it.": "这看起来不对。 有什么奇怪的东西在靠近，我能感觉到。",
    "That looks alien. We should investigate what is in there.": "这看起来很陌生。 我们应该调查那里有什么。",
    "They have some really hard defences in place. Wonder what we will find down there?": "他们有一些非常坚固的防御措施。 想知道我们会在那里找到什么吗？",
    "Global attack speed level": "全局攻击速度等级",
    "You have unlocked the On a mission achievement and earned 1 point(s)": "您已解锁“任务中”成就并获得 1 点数",
    "Max level": "最高等级",
    "New equipment added": "增加新装备",
    "stages cleared": "关卡已清除",
    "You have reached a new record of": "你已经达到了一个新的记录",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "t": "t",
    "0.4e": "0.4e",
    // 图标代码，不能汉化
    "Jacorb's Games": "Jacorb's Games",
    "DPS": "DPS",
    "X": "X",
    "NaN": "NaN",
    "": "",
    "": "",
    "": "",
    "": "",
    "By Jacorb90": "By Jacorb90",
    "content_copy": "content_copy",
    "library_books": "library_books",
    "discord": "discord",
    "drag_handle": "drag_handle",
    "edit": "edit",
    "forum": "forum",
    "content_paste": "content_paste",
    "delete": "delete",
    "info": "info",
    "settings": "settings",

    //树游戏
    'Loading...': '加载中...',
    'ALWAYS': '一直',
    'HARD RESET': '硬重置',
    'Export to clipboard': '导出到剪切板',
    'INCOMPLETE': '不完整',
    'HIDDEN': '隐藏',
    'AUTOMATION': '自动',
    'NEVER': '从不',
    'ON': '打开',
    'OFF': '关闭',
    'SHOWN': '显示',
    'Play Again': '再次游戏',
    'Keep Going': '继续',
    'The Modding Tree Discord': '模型树Discord',
    'You have': '你有',
    'It took you {{formatTime(player.timePlayed)}} to beat the game.': '花费了 {{formatTime(player.timePlayed)}} 时间去通关游戏.',
    'Congratulations! You have reached the end and beaten this game, but for now...': '恭喜你！ 您已经结束并通关了本游戏，但就目前而言...',
    'Main Prestige Tree server': '主声望树服务器',
    'Reach {{formatWhole(ENDGAME)}} to beat the game!': '达到 {{formatWhole(ENDGAME)}} 去通关游戏!',
    "Loading... (If this takes too long it means there was a serious error!": "正在加载...（如果这花费的时间太长，则表示存在严重错误！",
    'Loading... (If this takes too long it means there was a serious error!)←': '正在加载...（如果时间太长，则表示存在严重错误！）←',
    'Main\n\t\t\t\tPrestige Tree server': '主\n\t\t\t\t声望树服务器',
    'The Modding Tree\n\t\t\t\t\t\t\tDiscord': '模型树\n\t\t\t\t\t\t\tDiscord',
    'Please check the Discord to see if there are new content updates!': '请检查 Discord 以查看是否有新的内容更新！',
    'aqua': '水色',
    'AUTOMATION, INCOMPLETE': '自动化，不完整',
    'LAST, AUTO, INCOMPLETE': '最后，自动，不完整',
    'NONE': '无',
    'P: Reset for': 'P: 重置获得',
    'Git游戏': 'Git游戏',
    'QQ群号': 'QQ群号',
    'x': 'x',
    'QQ群号:': 'QQ群号:',
    '* 启用后台游戏': '* 启用后台游戏',
    '更多同类游戏:': '更多同类游戏:',
    '': '',
    '': '',
    '': '',

}


//需处理的前缀
var cnPrefix = {
    "\n": "\n",
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "",
    " ": "",
    //树游戏
    "\t\t\t": "\t\t\t",
    "\n\n\t\t": "\n\n\t\t",
    "\n\t\t": "\n\t\t",
    "\t": "\t",
    "Show Milestones: ": "显示里程碑：",
    "Autosave: ": "自动保存: ",
    "Offline Prod: ": "离线生产: ",
    "Completed Challenges: ": "完成的挑战: ",
    "High-Quality Tree: ": "高质量树贴图: ",
    "Offline Time: ": "离线时间: ",
    "Theme: ": "主题: ",
    "Anti-Epilepsy Mode: ": "抗癫痫模式：",
    "In-line Exponent: ": "直列指数：",
    "Single-Tab Mode: ": "单标签模式：",
    "Time Played: ": "已玩时长：",
    "Shift-Click to Toggle Tooltips: ": "Shift-单击以切换工具提示：",
    "Window ratio: ": "窗口比例：",
    "FPS: ": "FPS：",
    "Lv. ": "等级 ",
    "Upgrade: ": "升级: ",
    "Level: ": "等级: ",
    "Bonus: ": "奖励: ",
    "Reward points: ": "奖励点数：",
    "Background music: ": "背景音乐：",
    "Notifications: ": "通知：",
    "Run on background: ": "后台运行：",
    "Sound effects: ": "音效：",
    "Reduces health for the current ship by 0.05% per level (": "每级降低当前飞船的生命值 0.05% (",
    "Increases attack speed for the current ship by 0.05% per level (": "每级增加当前飞船的攻击速度 0.05% (",
    "Increases health for the current ship by 0.2% per level (": "每级增加当前舰艇的生命值 0.2% (",
    "Reduces damage reduction bonus for all ships by 0.1hp per level (": "每级降低所有舰船的伤害减免加成 0.1hp (",
    "Reduces damage taken for the current ship 0.2hp per level (": "减少当前飞船受到的伤害每级 0.2生命值 (",
    "Reduces enemies HP by 0.05hp per level (": "每级减少敌人生命值 0.05hp (",
    "Reduces attack speed for all ships by 0.1% per level (": "每级降低所有舰船的攻击速度 0.1% (",
    "Reached stage ": "到达关卡 ",
    "You ran this mission for ": "您执行此任务用了 ",
    "Points rewarded: ": "点数奖励：",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需处理的后缀
var cnPostfix = {
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "  ",
    " ": " ",
    "\n": "\n",
    "\n\t\t\t": "\n\t\t\t",
    "\t\t\n\t\t": "\t\t\n\t\t",
    "\t\t\t\t": "\t\t\t\t",
    "\n\t\t": "\n\t\t",
    "\t": "\t",
    " stages since previous record.)": " 关卡自上次记录以来。）",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需排除的，正则匹配
var cnExcludeWhole = [
    /^(\d+)$/,
    /^\s*$/, //纯空格
    /^([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+)\-([\d\.]+)\-([\d\.]+)$/,
    /^([\d\.]+)e(\d+)$/,
    /^([\d\.]+)$/,
    /^\(([\d\.]+)\/([\d\.]+)\)$/,
    /^成本(.+)$/,
    /^\(([\d\.]+)\%\)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+)K$/,
    /^([\d\.]+)M$/,
    /^([\d\.]+)B$/,
    /^([\d\.]+) K$/,
    /^([\d\.]+) M$/,
    /^([\d\.]+) B$/,
    /^([\d\.]+)s$/,
    /^([\d\.]+)x$/,
    /^x([\d\.]+)$/,
    /^([\d\.,]+)$/,
    /^\+([\d\.,]+)$/,
    /^\-([\d\.,]+)$/,
    /^([\d\.,]+)x$/,
    /^([\d\.,]+)\/([\d\.,]+)$/,
    /^x([\d\.,]+)$/,
    /^([\d\.,]+) \/ ([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)$/,
    /^e([\d\.]+)e([\d\.,]+)$/,
    /^x([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)x$/,
    /^[\u4E00-\u9FA5]+$/
];
var cnExcludePostfix = [
]

//正则替换，带数字的固定格式句子
//纯数字：(\d+)
//逗号：([\d\.,]+)
//小数点：([\d\.]+)
//原样输出的字段：(.+)
//换行加空格：\n(.+)
var cnRegReplace = new Map([
    [/^([\d\.]+) hours ([\d\.]+) minutes ([\d\.]+) seconds$/, '$1 小时 $2 分钟 $3 秒'],
    [/^You are gaining (.+) elves per second$/, '你每秒获得 $1 精灵'],
    [/^You have (.+) points$/, '你有 $1 点数'],
    [/^Next at (.+) points$/, '下一个在 $1 点数'],
    [/^Current drop rate for equipment is (.+)\% \((.+)% base \+ (.+)\% bonus\)$/, '当前装备的掉落率为 $1\%（$2\% 基础 \+ $3\% 奖励）'],
    [/^Increases damage for the current ship by (.+)\% per level \((.+)\%\)$/, '每级增加 当前飞船 的伤害 $1\% \($2\%\)'],
    [/^Increases health for all ship by (.+)\% per level \((.+)\%\)$/, '每级增加 所有飞船 的生命值 $1\% \($2\%\)'],
    [/^Increases health for all ships by (.+)\% per level \((.+)\%\)$/, '每级增加 所有飞船 的生命值 $1\% \($2\%\)'],
    [/^Increases attack speed for all ships by (.+)\% per level \((.+)\%\)$/, '每级增加 所有飞船 的攻击速度 $1\% \($2\%\)'],
    [/^Increases XP received by (.+)\% per level \((.+)\%\)$/, '每级增加 获得的 经验值 $1\% \($2\%\)'],
    [/^Reduces damage taken for all ships by (.+)hp per level \((.+)hp\)$/, '每级降低所有飞船 受到的伤害 $1生命值 \($2生命值\)'],
    [/^Heal (.+) hit points$/, '治愈 $1 生命值'],
    [/^Kill (.+) bosses$/, '击杀 $1 Boss'],
    [/^Prevent (.+) damage$/, '抵挡 $1 伤害'],
    [/^Give (.+) damage$/, '造成 $1 伤害'],
    [/^Collect (.+) xp$/, '收集 $1 经验值'],
    [/^Complete stage (.+) in freeplay missions$/, '在自由游戏任务中完成第 $1 关'],
    [/^Complete (.+) missions$/, '完成 $1 任务'],
    [/^Kill (.+) enemies$/, '击杀 $1 敌人'],
    [/^Attack speed \- (.+) levels$/, '攻击速度 \- $1 级'],
    [/^Damage reduction \- (.+) levels$/, '伤害减免 \- $1 级'],
    [/^XP boost \- (.+) levels$/, '经验提升 \- $1 级'],
	[/^([\d\.]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+)\/([\d\.,]+) kills$/, '$1\/$2 击杀'],
	[/^([\d\.,]+)\/([\d\.,]+) hp$/, '$1\/$2 生命值'],
	[/^([\d\.,]+)\/([\d\.,]+) levels$/, '$1\/$2 等级'],
	[/^([\d\.,]+)\/([\d\.,]+) dmg$/, '$1\/$2 伤害'],
	[/^\-([\d\.,]+)\/([\d\.,]+) dmg$/, '\-$1\/$2 伤害'],
	[/^([\d\.,]+)\/([\d\.,]+) xp$/, '$1\/$2 经验值'],
	[/^([\d\.,]+)\/([\d\.,]+) missions$/, '$1\/$2 任务'],
	[/^([\d\.,]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+)e([\d\.,]+)\/sec$/, '$1e$2\/秒'],
    [/^requires ([\d\.]+) more research points$/, '需要$1个研究点'],
    [/^([\d\.]+)e([\d\.,]+) points$/, '$1e$2 点数'],
    [/^([\d\.]+) elves$/, '$1 精灵'],
    [/^([\d\.]+)hp every 5 seconds$/, '$1 生命值 每隔 5 秒'],
    [/^([\d\.]+)d ([\d\.]+)h ([\d\.]+)m$/, '$1天 $2小时 $3分'],
    [/^([\d\.]+)e([\d\.,]+) elves$/, '$1e$2 精灵'],
    [/^([\d\.,]+) sec$/, '$1 秒'],
    [/^([\d\.,]+) xp$/, '$1 经验值'],
    [/^([\d\.,]+) XP$/, '$1 经验值'],
    [/^([\d\.,]+) equipments$/, '$1 装备'],
    [/^([\d\.,]+) elves$/, '$1 精灵'],
    [/^\*(.+) to electricity gain$/, '\*$1 到电力增益'],
    [/^Cost: (.+) points$/, '成本：$1 点数'],
    [/^Req: (.+) elves$/, '要求：$1 精灵'],
    [/^Req: (.+) \/ (.+) elves$/, '要求：$1 \/ $2 精灵'],
    [/^Usages: (\d+)\/$/, '用途：$1\/'],
    [/^workers: (\d+)\/$/, '工人：$1\/'],

]);