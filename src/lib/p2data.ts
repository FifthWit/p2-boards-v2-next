export interface p2map {
    BSP: string;
    Name: string;
    Chapter: number;
    Coop: boolean;
    BoardID: number;
    DialogueFade: string;
}

export const p2mapdata: p2map[] = 
		[
			{BSP: 'sp_a1_intro1'                , Name: 'Container Ride',       Chapter: 1, Coop: false, BoardID: 62761, DialogueFade: `You have [j]ust passed through an Aperture [S]cience Material E[m]ancipation Grill, which vaporises most Aperture Science equipment that touches it.`},
			{BSP: 'sp_a1_intro2'                , Name: 'Portal Carousel',      Chapter: 1, Coop: false, BoardID: 62758, DialogueFade: `Good. []Because of the tech[n]ical difficulties we [a]re currently experiencing, your test environment is unsuper[v]ised. Be[f]ore re-entering a [r]elaxation vault at the conclusion of testing, please take a m[o]ment to write down the re[s]ults of your test. []An Aperture Sci[e]nce Reintegration [A]ssociate will revive you for an interview when society has been rebuilt.`},
			{BSP: 'sp_a1_intro3'                , Name: 'Portal Gun',           Chapter: 1, Coop: false, BoardID: 47458, DialogueFade: `Good. [I]f you feel that a lethal [m]ilitary android has not respected your rights as detailed in the Law[s] of Robotics, pl[e]ase note it on your Self-[R]eporting Form. []A future Aperture [S]cience Entitlement Associate will initiate the appropriate grievance-filing paperwork.`},
			{BSP: 'sp_a1_intro4'                , Name: 'Smooth Jazz',          Chapter: 1, Coop: false, BoardID: 47455, DialogueFade: ``},
			{BSP: 'sp_a1_intro5'                , Name: 'Cube Momentum',        Chapter: 1, Coop: false, BoardID: 47452, DialogueFade: `Well [d]one. The En[r]ichment Center reminds [y]ou that although circumstances may appear bleak, you are not alon[e]. All Ap[e]rture Science Personality [C]onstructs will rem[a]in functional in ap[o]calyptic, low-power environments of as few as 1 point 1 volts.`},
			{BSP: 'sp_a1_intro6'                , Name: 'Future Starter',       Chapter: 1, Coop: false, BoardID: 47106, DialogueFade: `Good work [g]etting this far, future [s]tarter! That said, if you are simple-minded, ol[d], or irradi[a]ted in such a way th[a]t the future should not s[t]art with you, plea[s]e return to your primitive tribe, and send back someone better qualified for testing.`},
			{BSP: 'sp_a1_intro7'                , Name: 'Secret Panel',         Chapter: 1, Coop: false, BoardID: 62763, DialogueFade: ``},
			{BSP: 'sp_a1_wakeup'                , Name: 'Wakeup',               Chapter: 1, Coop: false, BoardID: 62759, DialogueFade: ``},
			{BSP: 'sp_a2_intro'                 , Name: 'Incinerator',          Chapter: 1, Coop: false, BoardID: 47735, DialogueFade: `But the important [t]hing is you're back, with me. And now I'm onto all your little tricks. []So there's nothing to sto[p] us from testing, []for the rest of your life.[] After that, []who knows, maybe I'll take up a hobby. Reanimating the dead, maybe.`},
			{BSP: 'sp_a2_laser_intro'           , Name: 'Laser Intro',          Chapter: 2, Coop: false, BoardID: 62765, DialogueFade: ``},
			{BSP: 'sp_a2_laser_stairs'          , Name: 'Laser Stairs',         Chapter: 2, Coop: false, BoardID: 47736, DialogueFade: `Well [d]one. Here come the test results... []you are a h[o]rrible person.[] Tha[t]'s what it says, []a horrible person. We weren't even testing for that.`},
			{BSP: 'sp_a2_dual_lasers'           , Name: 'Dual Lasers',          Chapter: 2, Coop: false, BoardID: 47738, DialogueFade: `[]Congratulatio[n]s. Not on the test. Most people emerge from su[s]pension terri[b]ly undernourished.[] I want to congra[t]ulate you on beatin[g] the odds and somehow managing to pack on a few pounds.`},
			{BSP: 'sp_a2_laser_over_goo'        , Name: 'Laser Over Goo',       Chapter: 2, Coop: false, BoardID: 47742, DialogueFade: ``},
			{BSP: 'sp_a2_catapult_intro'        , Name: 'Catapult Intro',       Chapter: 2, Coop: false, BoardID: 62767, DialogueFade: `Here's an interesting fact: []you're not breathin[g] real air. []It's too expensive to pump this far down. [W]e just take car[b]on dioxide [o]ut of a room, freshen it up a little, and pump it [b]ack in. []So you'll be [b]reathing the same [r]oom full of air [f]or the rest of your life.`},
			{BSP: 'sp_a2_trust_fling'           , Name: 'Trust Fling',          Chapter: 2, Coop: false, BoardID: 47744, DialogueFade: `{Remember before when I was talking about smelly garbage standing around being useless? That} wa[s] a metaphor. I was actually talking about yo[u]. [A]nd I'm so[r]ry. You didn't react at the time, []so I was [w]orried it [s]ailed right over your head, which would've [m]ade this apolo[g]y seem in[s]ane. []Tha[t]'s why I had to call you garbage a second time just now.`},
			{BSP: 'sp_a2_pit_flings'            , Name: 'Pit Flings',           Chapter: 2, Coop: false, BoardID: 47465, DialogueFade: ``},
			{BSP: 'sp_a2_fizzler_intro'         , Name: 'Fizzler Intro',        Chapter: 2, Coop: false, BoardID: 47746, DialogueFade: ``},
			{BSP: 'sp_a2_sphere_peek'           , Name: 'Ceiling Catapult',     Chapter: 3, Coop: false, BoardID: 47748, DialogueFade: ``},
			{BSP: 'sp_a2_ricochet'              , Name: 'Ricochet',             Chapter: 3, Coop: false, BoardID: 47751, DialogueFade: `Well, you passed the test. []I didn't see [t]he deer today.[] I did [s]ee some humans,[] but with you here I've got more test subjects than I'll ever need.`},
			{BSP: 'sp_a2_bridge_intro'          , Name: 'Bridge Intro',         Chapter: 3, Coop: false, BoardID: 47752, DialogueFade: `Excellent! You're a predator, and the[s]e tests are you[r] prey. [S]peaking of which, I was researching sharks for an upcoming [t]est. [D]o you know who el[s]e murders people who are only trying to help them? []Did you guess 'shar[k]s'? Because th[a]t's wrong. []The correct answer i[s] 'nobody.' Nobody but you is that pointlessly cruel.`},
			{BSP: 'sp_a2_bridge_the_gap'        , Name: 'Bridge The Gap',       Chapter: 3, Coop: false, BoardID: 47755, DialogueFade: `Well done.[] In fac[t], you did so [w]ell, I'm going to note this on your file, in the commen[d]ations sectio[n]. Oh,[] there's lots of [r]oom here. []'Did well. Enough.'`},
			{BSP: 'sp_a2_turret_intro'          , Name: 'Turret Intro',         Chapter: 3, Coop: false, BoardID: 47756, DialogueFade: ``},
			{BSP: 'sp_a2_laser_relays'          , Name: 'Laser Relays',         Chapter: 3, Coop: false, BoardID: 47759, DialogueFade: `You know how I'm going [t]o live forever, []but you're going to be dea[d] in sixty years? Well, I've been working on a bela[t]ed birthday presen[t] for you. []Well, more of a belated birthday medical pro[c]edure. [W]ell, te[c]hnically, i[t]'s a medical expe[r]iment. What's important is it's a present.`},
			{BSP: 'sp_a2_turret_blocker'        , Name: 'Turret Blocker',       Chapter: 3, Coop: false, BoardID: 47760, DialogueFade: `[]I'm going through the [l]ist of test subjects in cryogenic storage. I [m]anaged to find tw[o] with your last name.[] A m[a]n and a woman.[] So that's interesting. It's a small world.`},
			{BSP: 'sp_a2_laser_vs_turret'       , Name: 'Laser vs Turret',      Chapter: 3, Coop: false, BoardID: 47763, DialogueFade: `[2nd high note] https://cdn.discordapp.com/attachments/574898830995357697/1069483351246905395/laser-vs-turret.mp3`},
			{BSP: 'sp_a2_pull_the_rug'          , Name: 'Pull The Rug',         Chapter: 3, Coop: false, BoardID: 47764, DialogueFade: `I bet [y]ou think I forgot about your surprise. I didn't. []In fact, we're hea[d]ed to your surpris[e] right now. []After al[l] these years. I'm getting choked up just thinking about it.`},
			{BSP: 'sp_a2_column_blocker'        , Name: 'Column Blocker',       Chapter: 4, Coop: false, BoardID: 47766, DialogueFade: ``},
			{BSP: 'sp_a2_laser_chaining'        , Name: 'Laser Chaining',       Chapter: 4, Coop: false, BoardID: 47768, DialogueFade: `I thought about our [d]ilemma, and [I] came up with a sol[u]tion that I honestly think works out best for one of both of us.`},
			{BSP: 'sp_a2_triple_laser'          , Name: 'Triple Laser',         Chapter: 4, Coop: false, BoardID: 47770, DialogueFade: `I think [t]hese test chambers look even better than they did before. []It was easy, re[a]lly. You jus[t] have to look at things [o]bjectively, [s]ee what you don't need anymore, and trim out the fat.`},
			{BSP: 'sp_a2_bts1'                  , Name: 'Jailbreak',            Chapter: 4, Coop: false, BoardID: 47773, DialogueFade: ``},
			{BSP: 'sp_a2_bts2'                  , Name: 'Escape',               Chapter: 4, Coop: false, BoardID: 47774, DialogueFade: ``},
			{BSP: 'sp_a2_bts3'                  , Name: 'Turret Factory',       Chapter: 5, Coop: false, BoardID: 47776, DialogueFade: ``},
			{BSP: 'sp_a2_bts4'                  , Name: 'Turret Sabotage',      Chapter: 5, Coop: false, BoardID: 47779, DialogueFade: ``},
			{BSP: 'sp_a2_bts5'                  , Name: 'Neurotoxin Sabotage',  Chapter: 5, Coop: false, BoardID: 47780, DialogueFade: ``},
			{BSP: 'sp_a2_core'                  , Name: 'Core',                 Chapter: 5, Coop: false, BoardID: 62771, DialogueFade: ``},
			{BSP: 'sp_a3_01'                    , Name: 'Underground',          Chapter: 6, Coop: false, BoardID: 47783, DialogueFade: ``},
			{BSP: 'sp_a3_03'                    , Name: 'Cave Johnson',         Chapter: 6, Coop: false, BoardID: 47784, DialogueFade: ``},
			{BSP: 'sp_a3_jump_intro'            , Name: 'Repulsion Intro',      Chapter: 6, Coop: false, BoardID: 47787, DialogueFade: `Oh, in case you got [c]overed in that repulsion gel, here's some advice the lab boys gave me: []do not get covered in the repulsion gel. We haven't entirely nailed down what element it is yet, but I'll tell you this: it's a lively one, and it does not like the human skeleton.`},
			{BSP: 'sp_a3_bomb_flings'           , Name: 'Bomb Flings',          Chapter: 6, Coop: false, BoardID: 47468, DialogueFade: `Just a heads up, that coffee we gave you earlier had fluores[c]ent calcium in it so we could track the neuronal activity in your brain.[] There's a slight chance the calcium could harden and vitrify your frontal lobe. Anyway, don't stress yourself thinking about it. I'm serious. Visualising the scenario while under stress actually triggers the reaction.`},
			{BSP: 'sp_a3_crazy_box'             , Name: 'Crazy Box',            Chapter: 6, Coop: false, BoardID: 47469, DialogueFade: `{Science isn't} abou[t] "why", it's about "why not!" Why is so mu[c]h of our science dangerous? Why not marry safe science if you [l]ove it so much? In fact, why not invent a special safety [d]oor that won't hit you on the butt on the way out because you are fired! Not you, test subject, you're doing fine. Yes, you, box, your stuff, out the front door, parking lot, car. Goodbye.`},
			{BSP: 'sp_a3_transition01'          , Name: 'PotatOS',              Chapter: 6, Coop: false, BoardID: 47472, DialogueFade: ``},
			{BSP: 'sp_a3_speed_ramp'            , Name: 'Propulsion Intro',     Chapter: 7, Coop: false, BoardID: 47791, DialogueFade: `Great job, astro[n]aut, war hero, and or Olympian! With your help, [w]e're gonna cHaNgE ThE wOrLd! This on? *tap* *tap* *tap* Hey, listen up down there. That thing's called an 'elevator.' Not a bathroom.`},
			{BSP: 'sp_a3_speed_flings'          , Name: 'Propulsion Flings',    Chapter: 7, Coop: false, BoardID: 47793, DialogueFade: `In case you're interested, there's still some [p]ositions available for that bonus opportunity I mentioned earlier. []Again, all you gotta do is let us disassemble you. We're no[t] banging rocks together here, we know how to put a man back together. So, that's a complete reassembly. New vitals, spit-shine on the old ones, plus we're scooping out tumors. Frankly, you oughtta be paying us.`},
			{BSP: 'sp_a3_portal_intro'          , Name: 'Conversion Intro',     Chapter: 7, Coop: false, BoardID: 47795, DialogueFade: ``},
			{BSP: 'sp_a3_end'                   , Name: 'Three Gels',           Chapter: 7, Coop: false, BoardID: 47798, DialogueFade: ``},
			{BSP: 'sp_a4_intro'                 , Name: 'Test',                 Chapter: 8, Coop: false, BoardID: 88350, DialogueFade: `Alr[i]ght, so my paradox idea didn't work. An[d] it almost [k]illed me. []Luckily, by the looks of things, he knows as [m]uch about test bui[l]ding as he does about logical contradictions.`},
			{BSP: 'sp_a4_tb_intro'              , Name: 'Funnel Intro',         Chapter: 8, Coop: false, BoardID: 47800, DialogueFade: `Okay, so the [b]ad news is the tests [a]re my tests now.[] So they can kill us. The [g]ood news is? []Well, none so far, to be honest. I'll get back to you on that.`},
			{BSP: 'sp_a4_tb_trust_drop'         , Name: 'Ceiling Button',       Chapter: 8, Coop: false, BoardID: 47802, DialogueFade: `Ooh, ye[s], []well done.[] Thanks, all we had to do was pull that [l]ever. What? [W]ell no, you pressed the b-[A]HHHHHH! []I know we're in a l[o]t of trouble and probably about to die, but that was worth it.`},
			{BSP: 'sp_a4_tb_wall_button'        , Name: 'Wall Button',          Chapter: 8, Coop: false, BoardID: 47804, DialogueFade: `Oh no, []it's happening [s]ooner than I expected. I'm sure we'll be fine.`},
			{BSP: 'sp_a4_tb_polarity'           , Name: 'Polarity',             Chapter: 8, Coop: false, BoardID: 47806, DialogueFade: `[]Grrrrh, it's [n]ot enough! []If I'm such a moron, why can't you solve [a] simple test? []I might've pushed that moron thing a little too far this time.`},
			{BSP: 'sp_a4_tb_catch'              , Name: 'Funnel Catch',         Chapter: 8, Coop: false, BoardID: 47808, DialogueFade: `The body he's squatting in,[] my body, has a buil[t] in euphoric response to tes[t]ing. Eventually you build up a resistance to it. It can get a little, []unbearable, unless you have the me[n]tal capacity to push past it. It didn't matter to me, I was in it for the science. Him, though...`},
			{BSP: 'sp_a4_stop_the_box'          , Name: 'Stop The Box',         Chapter: 8, Coop: false, BoardID: 47811, DialogueFade: `Are you, []are you absolutely [s]ure you're solving the[s]e correctly? I mean, yes, you solved it, but I'm wondering[] if [m]aybe there's a number of way[s] to solve them, and you're picking all the [w]orst ways. []No, no, that was the solution. Grrh, what am I missing?`},
			{BSP: 'sp_a4_laser_catapult'        , Name: 'Laser Catapult',       Chapter: 8, Coop: false, BoardID: 47813, DialogueFade: `Remember when I told you that he was s[p]ecifically designed to [m]ake bad decision[s]? Because I think he's decided not [t]o maintain any [o]f the crucial functions required to keep this facility from exploding.`},
			{BSP: 'sp_a4_laser_platform'        , Name: 'Laser Platform',       Chapter: 8, Coop: false, BoardID: 47815, DialogueFade: ``},
			{BSP: 'sp_a4_speed_tb_catch'        , Name: 'Propulsion Catch',     Chapter: 8, Coop: false, BoardID: 47817, DialogueFade: `You two are gonna love this big surprise.[] In [f]act, [y]ou might say, you're going to love it...[] to [d]eath.[] Gonna love it, until you're d-- []until it kills you, until you're [d]ead. Ha[h]aha, alright, I don't know whether, []you're uh[h], you're pickin' up on what I'm sayin' there, but -- Yes, thanks, we get it.`},
			{BSP: 'sp_a4_jump_polarity'         , Name: 'Repulsion Polarity',   Chapter: 8, Coop: false, BoardID: 47819, DialogueFade: `[]So, he's inexplicably happy all of a sudden, [e]ven though he should b[e] going out of his min[d] with test withdrawal. And [h]e's got a surprise [f]or us. What did he find back there?`},
			{BSP: 'sp_a4_finale1'               , Name: 'Finale 1',             Chapter: 9, Coop: false, BoardID: 62776, DialogueFade: ``},
			{BSP: 'sp_a4_finale2'               , Name: 'Finale 2',             Chapter: 9, Coop: false, BoardID: 47821, DialogueFade: ``},
			{BSP: 'sp_a4_finale3'               , Name: 'Finale 3',             Chapter: 9, Coop: false, BoardID: 47824, DialogueFade: ``},
			{BSP: 'sp_a4_finale4'               , Name: 'Finale 4',             Chapter: 9, Coop: false, BoardID: 47456, DialogueFade: ``},
			{BSP: 'mp_coop_doors'               , Name: 'Doors',                Chapter: 1, Coop: true,  BoardID: 47741, DialogueFade: ``},
			{BSP: 'mp_coop_race_2'              , Name: 'Buttons',              Chapter: 1, Coop: true,  BoardID: 47825, DialogueFade: ``},
			{BSP: 'mp_coop_laser_2'             , Name: 'Lasers',               Chapter: 1, Coop: true,  BoardID: 47828, DialogueFade: `One of you is doing very [v]ery well`},
			{BSP: 'mp_coop_rat_maze'            , Name: 'Rat Maze',             Chapter: 1, Coop: true,  BoardID: 47829, DialogueFade: `Reflected in your final [sc]ore`},
			{BSP: 'mp_coop_laser_crusher'       , Name: 'Laser Crusher',        Chapter: 1, Coop: true,  BoardID: 45467, DialogueFade: `Not just flattery, you are gre[a]t at science`},
			{BSP: 'mp_coop_teambts'             , Name: 'Behind The Scenes',    Chapter: 1, Coop: true,  BoardID: 46362, DialogueFade: ``},
			{BSP: 'mp_coop_fling_3'             , Name: 'Flings',               Chapter: 2, Coop: true,  BoardID: 47831, DialogueFade: `Fit an edgeless safet[y] cube`},
			{BSP: 'mp_coop_infinifling_train'   , Name: 'Infinifling',          Chapter: 2, Coop: true,  BoardID: 47833, DialogueFade: `Must be very, very prou[d]`},
			{BSP: 'mp_coop_come_along'          , Name: 'Team Retrieval',       Chapter: 2, Coop: true,  BoardID: 47835, DialogueFade: ``},
			{BSP: 'mp_coop_fling_1'             , Name: 'Vertical Flings',      Chapter: 2, Coop: true,  BoardID: 47837, DialogueFade: ``},
			{BSP: 'mp_coop_catapult_1'          , Name: 'Catapults',            Chapter: 2, Coop: true,  BoardID: 47840, DialogueFade: ``},
			{BSP: 'mp_coop_multifling_1'        , Name: 'Multifling',           Chapter: 2, Coop: true,  BoardID: 47841, DialogueFade: `Looming consequence of [d]eath`},
			{BSP: 'mp_coop_fling_crushers'      , Name: 'Fling Crushers',       Chapter: 2, Coop: true,  BoardID: 47844, DialogueFade: `Earned a break [from] the official`},
			{BSP: 'mp_coop_fan'                 , Name: 'Industrial Fan',       Chapter: 2, Coop: true,  BoardID: 47845, DialogueFade: ``},
			{BSP: 'mp_coop_wall_intro'          , Name: 'Cooperative Bridges',  Chapter: 3, Coop: true,  BoardID: 47848, DialogueFade: `Let me give you a cl[ue]`},
			{BSP: 'mp_coop_wall_2'              , Name: 'Bridge Swap',          Chapter: 3, Coop: true,  BoardID: 47849, DialogueFade: `Testing track hall of fame for tha[t]`},
			{BSP: 'mp_coop_catapult_wall_intro' , Name: 'Fling Block',          Chapter: 3, Coop: true,  BoardID: 47854, DialogueFade: `Completing this test, a reward for [t]esting`},
			{BSP: 'mp_coop_wall_block'          , Name: 'Catapult Block',       Chapter: 3, Coop: true,  BoardID: 47856, DialogueFade: `Described it as impossible, dead[ly], cruel`},
			{BSP: 'mp_coop_catapult_2'          , Name: 'Bridge Fling',         Chapter: 3, Coop: true,  BoardID: 47858, DialogueFade: `To not reassemble you. He refu[s]ed`},
			{BSP: 'mp_coop_turret_walls'        , Name: 'Turret Walls',         Chapter: 3, Coop: true,  BoardID: 47861, DialogueFade: `Reconfigured it from my original [p]lans`},
			{BSP: 'mp_coop_turret_ball'         , Name: 'Turret Assassin',      Chapter: 3, Coop: true,  BoardID: 52642, DialogueFade: `You would've never completed them. So [a]gain`},
			{BSP: 'mp_coop_wall_5'              , Name: 'Bridge Testing',       Chapter: 3, Coop: true,  BoardID: 52660, DialogueFade: ``},
			{BSP: 'mp_coop_tbeam_redirect'      , Name: 'Cooperative Funnels',  Chapter: 4, Coop: true,  BoardID: 52662, DialogueFade: `Three. Seven. Hundred [and] seven`},
			{BSP: 'mp_coop_tbeam_drill'         , Name: 'Funnel Drill',         Chapter: 4, Coop: true,  BoardID: 52663, DialogueFade: `There. [I've] said it`},
			{BSP: 'mp_coop_tbeam_catch_grind_1' , Name: 'Funnel Catch Coop',    Chapter: 4, Coop: true,  BoardID: 52665, DialogueFade: `I'm not sur[e] I trust the two`},
			{BSP: 'mp_coop_tbeam_laser_1'       , Name: 'Funnel Laser',         Chapter: 4, Coop: true,  BoardID: 52667, DialogueFade: `Doing that just to aggra[v]ate me`},
			{BSP: 'mp_coop_tbeam_polarity'      , Name: 'Cooperative Polarity', Chapter: 4, Coop: true,  BoardID: 52671, DialogueFade: `I trust y[ou]. You are my favorite`},
			{BSP: 'mp_coop_tbeam_polarity2'     , Name: 'Funnel Hop',           Chapter: 4, Coop: true,  BoardID: 52687, DialogueFade: `If [O]range had said those things about me`},
			{BSP: 'mp_coop_tbeam_polarity3'     , Name: 'Advanced Polarity',    Chapter: 4, Coop: true,  BoardID: 52689, DialogueFade: `So I can trust [you] 100%`},
			{BSP: 'mp_coop_tbeam_maze'          , Name: 'Funnel Maze',          Chapter: 4, Coop: true,  BoardID: 52691, DialogueFade: `Can go any further, [*] I will need`},
			{BSP: 'mp_coop_tbeam_end'           , Name: 'Turret Warehouse',     Chapter: 4, Coop: true,  BoardID: 52777, DialogueFade: ``},
			{BSP: 'mp_coop_paint_come_along'    , Name: 'Repulsion Jumps',      Chapter: 5, Coop: true,  BoardID: 52694, DialogueFade: `The best cooperative tes[t]ing team`},
			{BSP: 'mp_coop_paint_redirect'      , Name: 'Double Bounce',        Chapter: 5, Coop: true,  BoardID: 52711, DialogueFade: `Number one request? [*] Less deadly tests`},
			{BSP: 'mp_coop_paint_bridge'        , Name: 'Bridge Repulsion',     Chapter: 5, Coop: true,  BoardID: 52714, DialogueFade: `You will need him for the f[i]nal track`},
			{BSP: 'mp_coop_paint_walljumps'     , Name: 'Wall Repulsion',       Chapter: 5, Coop: true,  BoardID: 52715, DialogueFade: `Ever write a historica[l] document`},
			{BSP: 'mp_coop_paint_speed_fling'   , Name: 'Propulsion Crushers',  Chapter: 5, Coop: true,  BoardID: 52717, DialogueFade: `If that doesn't moti[v]ate you`},
			{BSP: 'mp_coop_paint_red_racer'     , Name: 'Turret Ninja',         Chapter: 5, Coop: true,  BoardID: 52735, DialogueFade: `Are you [as] excited as I am?`},
			{BSP: 'mp_coop_paint_speed_catch'   , Name: 'Propulsion Retrieval', Chapter: 5, Coop: true,  BoardID: 52738, DialogueFade: `Subjects to monsters is about [*] a million`},
			{BSP: 'mp_coop_paint_longjump_intro', Name: 'Vault Entrance',       Chapter: 5, Coop: true,  BoardID: 52740, DialogueFade: ``},
			{BSP: 'mp_coop_separation_1'        , Name: 'Separation',           Chapter: 6, Coop: true,  BoardID: 49341, DialogueFade: `For as long as you [d]id`},
			{BSP: 'mp_coop_tripleaxis'          , Name: 'Triple Axis',          Chapter: 6, Coop: true,  BoardID: 49343, DialogueFade: `In the future, but we [d]on't`},
			{BSP: 'mp_coop_catapult_catch'      , Name: 'Catapult Catch',       Chapter: 6, Coop: true,  BoardID: 49345, DialogueFade: `I'm marking this art [a]ppreciated`},
			{BSP: 'mp_coop_2paints_1bridge'     , Name: 'Bridge Gels',          Chapter: 6, Coop: true,  BoardID: 49347, DialogueFade: ``},
			{BSP: 'mp_coop_paint_conversion'    , Name: 'Maintenance',          Chapter: 6, Coop: true,  BoardID: 49349, DialogueFade: ``},
			{BSP: 'mp_coop_bridge_catch'        , Name: 'Bridge Catch',         Chapter: 6, Coop: true,  BoardID: 49351, DialogueFade: `The scheming juices [f]lowing`},
			{BSP: 'mp_coop_laser_tbeam'         , Name: 'Double Lift',          Chapter: 6, Coop: true,  BoardID: 52757, DialogueFade: ``},
			{BSP: 'mp_coop_paint_rat_maze'      , Name: 'Gel Maze',             Chapter: 6, Coop: true,  BoardID: 52759, DialogueFade: `On the other side, [t]hanks`},
			{BSP: 'mp_coop_paint_crazy_box'     , Name: 'Crazier Box',          Chapter: 6, Coop: true,  BoardID: 48287, DialogueFade: ``},
		];