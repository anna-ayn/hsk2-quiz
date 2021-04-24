$(document).ready(function(){
    $(".character li").each(function(e) {
        if (e != 0)
            $(this).hide();
    });
    
    $("#next").click(function(){
        if ($(".character li:visible").next().length != 0)
            $(".character li:visible").next().show().prev().hide();
        else {
            $(".character li:visible").hide();
            $(".character li:first").show();
        }
        return false;
    });

    $("#prev").click(function(){
        if ($(".character li:visible").prev().length != 0)
            $(".character li:visible").prev().show().next().hide();
        else {
            $(".character li:visible").hide();
            $(".character li:last").show();
        }
        return false;
    });

    var ch1 = "您", ch2 = "它", ch3 = "大", ch4 = "家", ch5 = "每", 
    	ch6 = "为", ch7 = "什", ch8 = "么", ch9 = "两", ch10 = "百", 
    	ch11 = "千", ch12 = "第", ch13 = "一", ch14 = "次", ch15 = "公", 
    	ch16 = "斤", ch17 = "元", ch18 = "件", ch19 = '张', ch20 = "别", 
    	ch21 = "非", ch22 = "常", ch23 = "也", ch24 = "还", ch25 = "最", 
    	ch26 = "真", ch27 = "正", ch28 = "在", ch29 = '已', ch30 = "经",
    	ch31 = "起", ch32 = "再", ch33 = "就", ch34 = "因", ch35 = "所", 
    	ch36 = "以", ch37 = "但", ch38 = "是", ch39 = '从', ch40 = "此", 
    	ch41 = "向", ch42 = "离", ch43 = "得", ch44 = "着", ch45 = "过", 
    	ch46 = "吧", ch47 = "对", ch48 = "羊", ch49 = '肉', ch50 = "牛",
    	ch51 = "奶", ch52 = "鸡", ch53 = "蛋", ch54 = "西", ch55 = "瓜",
    	ch56 = "咖", ch57 = "啡", ch58 = "自", ch59 = '行', ch60 = "车",
    	ch61 = "鱼", ch62 = '船', ch63 = "雪", ch64 = "药", ch65 = "手", 
    	ch66 = "机", ch67 = "表", ch68 = "眼", ch69 = '睛', ch70 = "场", 
    	ch71 = "教", ch72 = "室", ch73 = "房", ch74 = "间", ch75 = "路", 
    	ch76 = "左", ch77 = "边", ch78 = "右", ch79 = '外', ch80 = "旁",
    	ch81 = "早", ch82 = "上", ch83 = "晚", ch84 = "小", ch85 = "时", 
    	ch86 = "去", ch87 = "年", ch88 = "号", ch89 = '生', ch90 = "日", 
    	ch91 = "哥", ch92 = "姐", ch93 = "弟", ch94 = "妹", ch95 = "丈", 
    	ch96 = "夫", ch97 = "妻", ch98 = "子", ch99 = '孩', ch100 = "男",
    	ch101 = "人", ch102 = "女", ch103 = "服", ch104 = "务", ch105 = "员", 
    	ch106 = "身", ch107 = "体", ch108 = "共", ch109 = '汽', ch110 = "报", 
    	ch111 = "纸", ch112 = "门", ch113 = "题", ch114 = "课", ch115 = "姓", 
    	ch116 = "问", ch117 = "事", ch118 = "情", ch119 = '考', ch120 = "试",
    	ch121 = "票", ch122 = "意", ch123 = "思", ch124 = "颜", ch125 = "色",
    	ch126 = "欢", ch127 = "迎", ch128 = "走", ch129 = '进', ch130 = "出",
    	ch131 = "跑", ch132 = "步", ch133 = "到", ch134 = "穿", ch135 = "洗", 
    	ch136 = "给", ch137 = "找", ch138 = "懂", ch139 = '笑', ch140 = "回", 
    	ch141 = "答", ch142 = "告", ch143 = "诉", ch144 = "准", ch145 = "备", 
    	ch146 = "开", ch147 = "介", ch148 = "绍", ch149 = '帮', ch150 = "助",
    	ch151 = "玩", ch152 = "送", ch153 = "等", ch154 = "让", ch155 = "床",
    	ch156 = "唱", ch157 = "歌", ch158 = "跳", ch159 = '舞', ch160 = "旅",
    	ch161 = "游", ch162 = '班', ch163 = "病", ch164 = "休", ch165 = "息", 
    	ch166 = "运", ch167 = "动", ch168 = "泳", ch169 = '踢', ch170 = "足", 
    	ch171 = "球", ch172 = "打", ch173 = "篮", ch174 = "完", ch175 = "觉", 
    	ch176 = "知", ch177 = "道", ch178 = "希", ch179 = '望', ch180 = "可",
    	ch181 = "要", ch182 = "能", ch183 = "高", ch184 = "红", ch185 = "白", 
    	ch186 = "黑", ch187 = "忙", ch188 = "快", ch189 = '慢', ch190 = "远", 
    	ch191 = "近", ch192 = "好", ch193 = "吃", ch194 = "累", ch195 = "长", 
    	ch196 = "新", ch197 = "贵", ch198 = "便", ch199 = '宜', ch200 = "晴",
		ch201 = "阴", ch202 = "错", ch203 = "乐", ch204 = '始';

    var writer1 = HanziWriter.create('ch1-div', ch1);
    writer1.quiz();

	var writer2 = HanziWriter.create('ch2-div', ch2);
	writer2.quiz();

	var writer3a = HanziWriter.create('ch3a-div', ch3);
    writer3a.quiz();

	var writer3b = HanziWriter.create('ch3b-div', ch4);
	writer3b.quiz();

	var writer4 = HanziWriter.create('ch4-div', ch5);
    writer4.quiz();

    var writer5a = HanziWriter.create('ch5a-div', ch6);
    writer5a.quiz();

    var writer5b = HanziWriter.create('ch5b-div', ch7);
    writer5b.quiz();

    var writer5c = HanziWriter.create('ch5c-div', ch8);
    writer5c.quiz();

   	var writer6 = HanziWriter.create('ch6-div', ch9);
    writer6.quiz();

	var writer7 = HanziWriter.create('ch7-div', ch10);
	writer7.quiz();

	var writer8 = HanziWriter.create('ch8-div', ch11);
    writer8.quiz();

    var writer9a = HanziWriter.create('ch9a-div', ch12);
    writer9a.quiz();

    var writer9b = HanziWriter.create('ch9b-div', ch13);
    writer9b.quiz();

	var writer10 = HanziWriter.create('ch10-div', ch14);
    writer10.quiz();

    var writer11a = HanziWriter.create('ch11a-div', ch15);
    writer11a.quiz();

    var writer11b = HanziWriter.create('ch11b-div', ch16);
    writer11b.quiz();

    var writer12 = HanziWriter.create('ch12-div', ch17);
    writer12.quiz();

	var writer13 = HanziWriter.create('ch13-div', ch18);
	writer13.quiz();

	var writer14 = HanziWriter.create('ch14-div', ch19);
    writer14.quiz();

	var writer15 = HanziWriter.create('ch15-div', ch20);
	writer15.quiz();

    var writer16a = HanziWriter.create('ch16a-div', ch21);
    writer16a.quiz();

    var writer16b = HanziWriter.create('ch16b-div', ch22);
    writer16b.quiz();

    var writer17 = HanziWriter.create('ch17-div', ch23);
    writer17.quiz();

	var writer18 = HanziWriter.create('ch18-div', ch24);
	writer18.quiz();

	var writer19 = HanziWriter.create('ch19-div', ch25);
    writer19.quiz();

	var writer20 = HanziWriter.create('ch20-div', ch26);
	writer20.quiz();

    var writer21a = HanziWriter.create('ch21a-div', ch27);
    writer21a.quiz();

    var writer21b = HanziWriter.create('ch21b-div', ch28);
    writer21b.quiz();

    var writer22a = HanziWriter.create('ch22a-div', ch29);
    writer22a.quiz();

    var writer22b = HanziWriter.create('ch22b-div', ch30);
    writer22b.quiz();

    var writer23a = HanziWriter.create('ch23a-div', ch13);
    writer23a.quiz();

    var writer23b = HanziWriter.create('ch23b-div', ch31);
    writer23b.quiz();

	var writer24 = HanziWriter.create('ch24-div', ch32);
    writer24.quiz();

	var writer25 = HanziWriter.create('ch25-div', ch33);
	writer25.quiz();

    var writer26a = HanziWriter.create('ch26a-div', ch34);
    writer26a.quiz();

    var writer26b = HanziWriter.create('ch26b-div', ch6);
    writer26b.quiz();

    var writer27a = HanziWriter.create('ch27a-div', ch35);
    writer27a.quiz();

    var writer27b = HanziWriter.create('ch27b-div', ch36);
    writer27b.quiz();

    var writer28a = HanziWriter.create('ch28a-div', ch37);
    writer28a.quiz();

    var writer28b = HanziWriter.create('ch28b-div', ch38);
    writer28b.quiz();

    var writer29 = HanziWriter.create('ch29-div', ch39);
    writer29.quiz();

	var writer30 = HanziWriter.create('ch30-div', ch40);
	writer30.quiz();

	var writer31 = HanziWriter.create('ch31-div', ch41);
    writer31.quiz();

	var writer32 = HanziWriter.create('ch32-div', ch42);
	writer32.quiz();

    var writer33 = HanziWriter.create('ch33-div', ch43);
    writer33.quiz();

	var writer34 = HanziWriter.create('ch34-div', ch44);
	writer34.quiz();

	var writer35 = HanziWriter.create('ch35-div', ch45);
    writer35.quiz();

	var writer36 = HanziWriter.create('ch36-div', ch46);
	writer36.quiz();

	var writer37 = HanziWriter.create('ch37-div', ch47);
    writer37.quiz();

    var writer38a = HanziWriter.create('ch38a-div', ch48);
    writer38a.quiz();

    var writer38b = HanziWriter.create('ch38b-div', ch49);
    writer38b.quiz();

    var writer39a = HanziWriter.create('ch39a-div', ch50);
    writer39a.quiz();

    var writer39b = HanziWriter.create('ch39b-div', ch51);
    writer39b.quiz();

    var writer40a = HanziWriter.create('ch40a-div', ch52);
    writer40a.quiz();

    var writer40b = HanziWriter.create('ch40b-div', ch53);
    writer40b.quiz();

    var writer41a = HanziWriter.create('ch41a-div', ch54);
    writer41a.quiz();

    var writer41b = HanziWriter.create('ch41b-div', ch55);
    writer41b.quiz();

    var writer42a = HanziWriter.create('ch42a-div', ch56);
    writer42a.quiz();

    var writer42b = HanziWriter.create('ch42b-div', ch57);
    writer42b.quiz();

    var writer43a = HanziWriter.create('ch43a-div', ch58);
    writer43a.quiz();

    var writer43b = HanziWriter.create('ch43b-div', ch59);
    writer43b.quiz();

    var writer43c = HanziWriter.create('ch43c-div', ch60);
    writer43c.quiz();

    var writer44 = HanziWriter.create('ch44-div', ch61);
    writer44.quiz();

	var writer45 = HanziWriter.create('ch45-div', ch62);
	writer45.quiz();

    var writer46 = HanziWriter.create('ch46-div', ch63);
    writer46.quiz();

	var writer47 = HanziWriter.create('ch47-div', ch64);
	writer47.quiz();

    var writer48a = HanziWriter.create('ch48a-div', ch65);
    writer48a.quiz();

    var writer48b = HanziWriter.create('ch48b-div', ch66);
    writer48b.quiz();

    var writer49a = HanziWriter.create('ch49a-div', ch65);
    writer49a.quiz();

    var writer49b = HanziWriter.create('ch49b-div', ch67);
    writer49b.quiz();

    var writer50a = HanziWriter.create('ch50a-div', ch68);
    writer50a.quiz();

    var writer50b = HanziWriter.create('ch50b-div', ch69);
    writer50b.quiz();

    var writer51a = HanziWriter.create('ch51a-div', ch66);
    writer51a.quiz();

    var writer51b = HanziWriter.create('ch51b-div', ch70);
    writer51b.quiz();

    var writer52a = HanziWriter.create('ch52a-div', ch71);
    writer52a.quiz();

    var writer52b = HanziWriter.create('ch52b-div', ch72);
    writer52b.quiz();

    var writer53a = HanziWriter.create('ch53a-div', ch73);
    writer53a.quiz();

    var writer53b = HanziWriter.create('ch53b-div', ch74);
    writer53b.quiz();

    var writer54 = HanziWriter.create('ch54-div', ch75);
    writer54.quiz();

    var writer55a = HanziWriter.create('ch55a-div', ch76);
    writer55a.quiz();

    var writer55b = HanziWriter.create('ch55b-div', ch77);
    writer55b.quiz();

    var writer56a = HanziWriter.create('ch56a-div', ch78);
    writer56a.quiz();

    var writer56b = HanziWriter.create('ch56b-div', ch77);
    writer56b.quiz();

    var writer57 = HanziWriter.create('ch57-div', ch79);
    writer57.quiz();

    var writer58a = HanziWriter.create('ch58a-div', ch80);
    writer58a.quiz();

    var writer58b = HanziWriter.create('ch58b-div', ch77);
    writer58b.quiz();

    var writer59a = HanziWriter.create('ch59a-div', ch81);
    writer59a.quiz();

    var writer59b = HanziWriter.create('ch59b-div', ch82);
    writer59b.quiz();

    var writer60a = HanziWriter.create('ch60a-div', ch83);
    writer60a.quiz();

    var writer60b = HanziWriter.create('ch60b-div', ch82);
    writer60b.quiz();

    var writer61a = HanziWriter.create('ch61a-div', ch84);
    writer61a.quiz();

    var writer61b = HanziWriter.create('ch61b-div', ch85);
    writer61b.quiz();

    var writer62a = HanziWriter.create('ch62a-div', ch85);
    writer62a.quiz();

    var writer62b = HanziWriter.create('ch62b-div', ch74);
    writer62b.quiz();

    var writer63a = HanziWriter.create('ch63a-div', ch86);
    writer63a.quiz();

    var writer63b = HanziWriter.create('ch63b-div', ch87);
    writer63b.quiz();

	var writer64 = HanziWriter.create('ch64-div', ch88);
	writer64.quiz();

    var writer65a = HanziWriter.create('ch65a-div', ch89);
    writer65a.quiz();

    var writer65b = HanziWriter.create('ch65b-div', ch90);
    writer65b.quiz();

    var writer66a = HanziWriter.create('ch66a-div', ch91);
    writer66a.quiz();

    var writer66b = HanziWriter.create('ch66b-div', ch91);
    writer66b.quiz();

    var writer67a = HanziWriter.create('ch67a-div', ch92);
    writer67a.quiz();

    var writer67b = HanziWriter.create('ch67b-div', ch92);
    writer67b.quiz();

    var writer68a = HanziWriter.create('ch68a-div', ch93);
    writer68a.quiz();

    var writer68b = HanziWriter.create('ch68b-div', ch93);
    writer68b.quiz();

    var writer69a = HanziWriter.create('ch69a-div', ch94);
    writer69a.quiz();

    var writer69b = HanziWriter.create('ch69b-div', ch94);
    writer69b.quiz();

    var writer70a = HanziWriter.create('ch70a-div', ch95);
    writer70a.quiz();

    var writer70b = HanziWriter.create('ch70b-div', ch96);
    writer70b.quiz();

    var writer71a = HanziWriter.create('ch71a-div', ch97);
    writer71a.quiz();

    var writer71b = HanziWriter.create('ch71b-div', ch98);
    writer71b.quiz();

    var writer72a = HanziWriter.create('ch72a-div', ch99);
    writer72a.quiz();

    var writer72b = HanziWriter.create('ch72b-div', ch98);
    writer72b.quiz();

	var writer73a = HanziWriter.create('ch73a-div', ch100);
	writer73a.quiz();

	var writer73b = HanziWriter.create('ch73b-div', ch101);
	writer73b.quiz();

    var writer74a = HanziWriter.create('ch74a-div', ch102);
    writer74a.quiz();

    var writer74b = HanziWriter.create('ch74b-div', ch101);
    writer74b.quiz();

    var writer75a = HanziWriter.create('ch75a-div', ch103);
    writer75a.quiz();

    var writer75b = HanziWriter.create('ch75b-div', ch104);
    writer75b.quiz();

    var writer75c = HanziWriter.create('ch75c-div', ch105);
    writer75c.quiz();

    var writer76a = HanziWriter.create('ch76a-div', ch106);
    writer76a.quiz();

    var writer76b = HanziWriter.create('ch76b-div', ch107);
    writer76b.quiz();

    var writer77a = HanziWriter.create('ch77a-div', ch15);
    writer77a.quiz();

    var writer77b = HanziWriter.create('ch77b-div', ch108);
    writer77b.quiz();

    var writer77c = HanziWriter.create('ch77c-div', ch109);
    writer77c.quiz();

    var writer77d = HanziWriter.create('ch77d-div', ch60);
    writer77d.quiz();

    var writer78a = HanziWriter.create('ch78a-div', ch110);
    writer78a.quiz();

    var writer78b = HanziWriter.create('ch78b-div', ch111);
    writer78b.quiz();

	var writer79 = HanziWriter.create('ch79-div', ch112);
    writer79.quiz();

	var writer80 = HanziWriter.create('ch80-div', ch113);
	writer80.quiz();

	var writer81 = HanziWriter.create('ch81-div', ch114);
    writer81.quiz();

	var writer82 = HanziWriter.create('ch82-div', ch115);
	writer82.quiz();

	var writer83a = HanziWriter.create('ch83a-div', ch116);
	writer83a.quiz();

	var writer83b = HanziWriter.create('ch83b-div', ch113);
	writer83b.quiz();

    var writer84a = HanziWriter.create('ch84a-div', ch117);
    writer84a.quiz();

    var writer84b = HanziWriter.create('ch84b-div', ch118);
    writer84b.quiz();

    var writer85a = HanziWriter.create('ch85a-div', ch119);
    writer85a.quiz();

    var writer85b = HanziWriter.create('ch85b-div', ch120);
    writer85b.quiz();

	var writer86 = HanziWriter.create('ch86-div', ch121);
	writer86.quiz();

	var writer87a = HanziWriter.create('ch87a-div', ch122);
    writer87a.quiz();

	var writer87b = HanziWriter.create('ch87b-div', ch123);
    writer87b.quiz();

    var writer88a = HanziWriter.create('ch88a-div', ch124);
    writer88a.quiz();

    var writer88b = HanziWriter.create('ch88b-div', ch125);
    writer88b.quiz();

   var writer89a = HanziWriter.create('ch89a-div', ch126);
    writer89a.quiz();

    var writer89b = HanziWriter.create('ch89b-div', ch127);
    writer89b.quiz();

	var writer90 = HanziWriter.create('ch90-div', ch116);
    writer90.quiz();

    var writer91 = HanziWriter.create('ch91-div', ch128);
    writer91.quiz();

	var writer92 = HanziWriter.create('ch92-div', ch129);
	writer92.quiz();

	var writer93 = HanziWriter.create('ch93-div', ch130);
    writer93.quiz();

    var writer94a = HanziWriter.create('ch94a-div', ch131);
    writer94a.quiz();

    var writer94b = HanziWriter.create('ch94b-div', ch132);
    writer94b.quiz();

	var writer95 = HanziWriter.create('ch95-div', ch133);
	writer95.quiz();

    var writer96 = HanziWriter.create('ch96-div', ch134);
    writer96.quiz();

    var writer97 = HanziWriter.create('ch97-div', ch135);
    writer97.quiz();

	var writer98 = HanziWriter.create('ch98-div', ch136);
	writer98.quiz();

	var writer99 = HanziWriter.create('ch99-div', ch137);
    writer99.quiz();

	var writer100 = HanziWriter.create('ch100-div', ch138);
	writer100.quiz();

    var writer101 = HanziWriter.create('ch101-div', ch139);
    writer101.quiz();

    var writer102a = HanziWriter.create('ch102a-div', ch140);
    writer102a.quiz();

    var writer102b = HanziWriter.create('ch102b-div', ch141);
    writer102b.quiz();

    var writer103a = HanziWriter.create('ch103a-div', ch142);
    writer103a.quiz();

    var writer103b = HanziWriter.create('ch103b-div', ch143);
    writer103b.quiz();

    var writer104a = HanziWriter.create('ch104a-div', ch144);
    writer104a.quiz();

    var writer104b = HanziWriter.create('ch104b-div', ch145);
    writer104b.quiz();

    var writer105a = HanziWriter.create('ch105a-div', ch146);
    writer105a.quiz();

    var writer105b = HanziWriter.create('ch105b-div', ch204);
    writer105b.quiz();

    var writer106a = HanziWriter.create('ch106a-div', ch147);
    writer106a.quiz();

    var writer106b = HanziWriter.create('ch106b-div', ch148);
    writer106b.quiz();

    var writer107a = HanziWriter.create('ch107a-div', ch149);
    writer107a.quiz();

    var writer107b = HanziWriter.create('ch107b-div', ch150);
    writer107b.quiz();

	var writer108 = HanziWriter.create('ch108-div', ch151);
	writer108.quiz();

	var writer109 = HanziWriter.create('ch109-div', ch152);
    writer109.quiz();

	var writer110 = HanziWriter.create('ch110-div', ch153);
	writer110.quiz();

    var writer111 = HanziWriter.create('ch111-div', ch154);
    writer111.quiz();

    var writer112a = HanziWriter.create('ch112a-div', ch31);
    writer112a.quiz();

    var writer112b = HanziWriter.create('ch112b-div', ch155);
    writer112b.quiz();

	var writer113a = HanziWriter.create('ch113a-div', ch156);
	writer113a.quiz();

	var writer113b = HanziWriter.create('ch113b-div', ch157);
	writer113b.quiz();

    var writer114a = HanziWriter.create('ch114a-div', ch158);
    writer114a.quiz();

    var writer114b = HanziWriter.create('ch114b-div', ch159);
    writer114b.quiz();

    var writer115a = HanziWriter.create('ch115a-div', ch160);
    writer115a.quiz();

    var writer115b = HanziWriter.create('ch115b-div', ch161);
    writer115b.quiz();

    var writer116a = HanziWriter.create('ch116a-div', ch82);
    writer116a.quiz();

    var writer116b = HanziWriter.create('ch116b-div', ch162);
    writer116b.quiz();

    var writer117a = HanziWriter.create('ch117a-div', ch89);
    writer117a.quiz();

    var writer117b = HanziWriter.create('ch117b-div', ch163);
    writer117b.quiz();

    var writer118a = HanziWriter.create('ch118a-div', ch164);
    writer118a.quiz();

    var writer118b = HanziWriter.create('ch118b-div', ch165);
    writer118b.quiz();

    var writer119a = HanziWriter.create('ch119a-div', ch166);
    writer119a.quiz();

    var writer119b = HanziWriter.create('ch119b-div', ch167);
    writer119b.quiz();

    var writer120a = HanziWriter.create('ch120a-div', ch161);
    writer120a.quiz();

    var writer120b = HanziWriter.create('ch120b-div', ch168);
    writer120b.quiz();

    var writer121a = HanziWriter.create('ch121a-div', ch169);
    writer121a.quiz();

    var writer121b = HanziWriter.create('ch121b-div', ch170);
    writer121b.quiz();

    var writer121c = HanziWriter.create('ch121c-div', ch171);
    writer121c.quiz();

    var writer122a = HanziWriter.create('ch122a-div', ch172);
    writer122a.quiz();

    var writer122b = HanziWriter.create('ch122b-div', ch173);
    writer122b.quiz();

    var writer122c = HanziWriter.create('ch122c-div', ch171);
    writer122c.quiz();

    var writer123 = HanziWriter.create('ch123-div', ch174);
    writer123.quiz();

    var writer124a = HanziWriter.create('ch124a-div', ch175);
    writer124a.quiz();

    var writer124b = HanziWriter.create('ch124b-div', ch43);
    writer124b.quiz();

    var writer125a = HanziWriter.create('ch125a-div', ch176);
    writer125a.quiz();

    var writer125b = HanziWriter.create('ch125b-div', ch177);
    writer125b.quiz();

    var writer126a = HanziWriter.create('ch126a-div', ch178);
    writer126a.quiz();

    var writer126b = HanziWriter.create('ch126b-div', ch179);
    writer126b.quiz();

    var writer127a = HanziWriter.create('ch127a-div', ch180);
    writer127a.quiz();

    var writer127b = HanziWriter.create('ch127b-div', ch36);
    writer127b.quiz();

    var writer128 = HanziWriter.create('ch128-div', ch181);
    writer128.quiz();

    var writer129a = HanziWriter.create('ch129a-div', ch180);
    writer129a.quiz();

    var writer129b = HanziWriter.create('ch129b-div', ch182);
    writer129b.quiz();

	var writer130 = HanziWriter.create('ch130-div', ch183);
    writer130.quiz();

    var writer131 = HanziWriter.create('ch131-div', ch184);
    writer131.quiz();

	var writer132 = HanziWriter.create('ch132-div', ch185);
	writer132.quiz();

    var writer133 = HanziWriter.create('ch133-div', ch186);
    writer133.quiz();

	var writer134 = HanziWriter.create('ch134-div', ch187);
	writer134.quiz();

	var writer135 = HanziWriter.create('ch135-div', ch188);
    writer135.quiz();

	var writer136 = HanziWriter.create('ch136-div', ch189);
	writer136.quiz();

	var writer137 = HanziWriter.create('ch137-div', ch190);
    writer137.quiz();

    var writer138 = HanziWriter.create('ch138-div', ch191);
    writer138.quiz();

    var writer139a = HanziWriter.create('ch139a-div', ch192);
    writer139a.quiz();

    var writer139b = HanziWriter.create('ch139b-div', ch193);
    writer139b.quiz();

	var writer140 = HanziWriter.create('ch140-div', ch194);
    writer140.quiz();

    var writer141 = HanziWriter.create('ch141-div', ch195);
    writer141.quiz();

    var writer142 = HanziWriter.create('ch142-div', ch196);
    writer142.quiz();

	var writer143 = HanziWriter.create('ch143-div', ch197);
	writer143.quiz();

	var writer144a = HanziWriter.create('ch144a-div', ch198);
    writer144a.quiz();

	var writer144b = HanziWriter.create('ch144b-div', ch199);
	writer144b.quiz();

	var writer145 = HanziWriter.create('ch145-div', ch200);
    writer145.quiz();

	var writer146 = HanziWriter.create('ch146-div', ch201);
	writer146.quiz();

	var writer147 = HanziWriter.create('ch147-div', ch202);
    writer147.quiz();

    var writer148a = HanziWriter.create('ch148a-div', ch188);
    writer148a.quiz();

    var writer148b = HanziWriter.create('ch148b-div', ch203);
    writer148b.quiz();
    
	/* writer3.quiz({
		onComplete: function(isComplete) {{
			
	  		$("#options").show(); */

	/* 	$(function(){
  		$('#quiz-reset').on('click', function(evt) {
    	evt.preventDefault();
    	writer1.quiz();
    	writer2.quiz();
  		});
	}); */



});





