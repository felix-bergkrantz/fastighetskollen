// Data för Bostadsbevakning. Skrivs om efter varje avläsning av Booli.
// Varje block är rader med fält åtskilda av lodstreck (|).
//
// objekt:     förening|område|adress|status|rum|boarea|våning|avgift|pris|tid på Booli|visning|sökväg på booli.se|avläst
// foreningar: förening|område|lägenheter|byggår|registreringsår|Booli-id|markägande
// andringar:  datum|förening|adress|vad som ändrades
window.BOSTADSDATA = {
  avlast: "2026-11-20",

  objekt: `
Brf Arvodet 2|Hägerstensåsen|Arvodesvägen 8|Till salu|2|48|2|5026|2795000|6 dagar|Visning sön 22 nov kl 11:30.|bostad/314396|2026-11-20
Brf Bokbindarvägen 78|Hägerstensåsen|Bokbindarvägen 78|Till salu|1|38|1|4165|2395000|3 månader||bostad/336097|2026-11-20
Brf Handpenningen|Hägerstensåsen|Riksdalervägen 24|Till salu|2|51|3|4214|3295000|26 dagar|Budgivning pågår. Visning sön 22 nov kl 12:50.|bostad/706924|2026-11-20
Brf Obligationen 5|Hägerstensåsen|Sparbanksvägen 78A|Till salu|2|59|BV|5147|3095000|2 månader|Visning sön 22 nov kl 12:00.|annons/5932137|2026-11-20
Brf Sparboken 4|Hägerstensåsen|Sparbanksvägen 85|Till salu|2|51|1|4147|2995000|4 dagar|Visning sön 22 nov kl 12:15.|bostad/744412|2026-11-20
Brf Aktien 3|Hägerstensåsen|Inteckningsvägen 60|Snart till salu|2|43,5|2|3366||1 år||bostad/133179|2026-11-20
Brf Arvodet 2|Hägerstensåsen|Arvodesvägen 6|Snart till salu|1|25|1|2971|1750000|1 månad||bostad/314407|2026-11-20
Brf Arvodet-Kvittensen|Hägerstensåsen|Bäckvägen 169|Snart till salu|3|78|3|4913||2 månader||annons/6142265|2026-11-20
Brf Arvodet-Kvittensen|Hägerstensåsen|Bäckvägen 165|Snart till salu|3|78|3|4913||3 månader||bostad/417239|2026-11-20
Brf Bergsparken|Hägerstensåsen|Piruettvägen 4|Snart till salu|2|63|2|4864||2 månader||annons/6271913|2026-11-20
Brf Bergsparken|Hägerstensåsen|Piruettvägen 9|Snart till salu|4|106|BV|5727||4 år||bostad/4011559|2026-11-20
Brf Bokbindarvägen 78|Hägerstensåsen|Bokbindarvägen 78|Snart till salu|1|24||3065||2 månader||bostad/336098|2026-11-20
Brf Gåvoskatten 3 o 4|Hägerstensåsen|Valutavägen 32|Snart till salu|2|52|2|3774||5 månader||bostad/783293|2026-11-20
Brf Handpenningen|Hägerstensåsen|Riksdalervägen 18|Snart till salu|2|51|3|4214|3195000|27 dagar|Budgivning pågår.|bostad/706906|2026-11-20
Brf Handpenningen|Hägerstensåsen|Riksdalervägen 16|Snart till salu|3|70|3|5782||24 dagar||annons/6325546|2026-11-20
Brf Handpenningen|Hägerstensåsen|Riksdalervägen 14|Snart till salu|2|51|1|4214|3495000|3 månader||bostad/706888|2026-11-20
Brf Kofferten|Hägerstensåsen|Riksdalervägen 7|Snart till salu|3|63|1|2388||1 år||annons/5915194|2026-11-20
Brf Kronan i Stockholm|Hägerstensåsen|Inteckningsvägen 17H|Snart till salu|2|65|2|5742||20 dagar||annons/6330592|2026-11-20
Brf Kronan i Stockholm|Hägerstensåsen|Inteckningsvägen 17A|Snart till salu|2|65|3|5795||3 månader||bostad/133303|2026-11-20
Brf Obligationen 4|Hägerstensåsen|Sparbanksvägen 66|Snart till salu|3|56|BV|||5 år||bostad/744336|2026-11-20
Brf Obligationen 5|Hägerstensåsen|Sparbanksvägen 76|Snart till salu|2|45|1|3268||3 år||bostad/744365|2026-11-20
Brf Skattsedeln 1|Hägerstensåsen|Valutavägen 25|Snart till salu|1|29|BV|2936||2 dagar||bostad/783233|2026-11-20
Brf Skattsedeln 1|Hägerstensåsen|Valutavägen 27|Snart till salu|2|53|2|4558||14 dagar||bostad/783245|2026-11-20
Brf Trädkronan|Hägerstensåsen|Valutavägen 66E|Snart till salu|3|62|5|5155|4250000|20 dagar||annons/6331734|2026-11-20
Brf Flygplansfabriken|Telefonplan|Tellusborgsvägen 94|Till salu|1|29|4|2247|2295000|3 dagar|Visning sön 22 nov kl 13:10.|bostad/3926045|2026-11-20
Brf Insteget|Telefonplan|Tellusborgsvägen 92|Till salu|1|35|1|2717|2695000|15 dagar||bostad/4383088|2026-11-20
Brf Insteget|Telefonplan|Tellusborgsvägen 92|Till salu|1,5|37|3|2868|2495000|20 dagar|Visning sön 22 nov kl 13:00.|bostad/4372237|2026-11-20
Brf Metronomen|Telefonplan|Radiusbacken 39|Till salu|2|51|8|3910|3495000|5 dagar|Visning sön 22 nov kl 13:30.|bostad/4097054|2026-11-20
Brf Metronomen|Telefonplan|Radiusbacken 39|Till salu|2|39|1|2990|2950000|9 dagar|Budgivning pågår. Visning sön 22 nov kl 12:00.|bostad/4096972|2026-11-20
Brf Metronomen|Telefonplan|Radiusbacken 49|Till salu|1|32||2454|2195000|4 månader|Visning sön 22 nov kl 13:00.|bostad/4097108|2026-11-20
Brf Metronomen|Telefonplan|Radiusbacken 49|Till salu|2|32|4|2500||12 månader||annons/5931176|2026-11-20
Brf Plommonträdet 5|Telefonplan|Valborgsmässovägen 20C|Till salu|2|52|3|4372|2995000|5 dagar|Visning sön 22 nov kl 12:00.|annons/6001547|2026-11-20
Brf Plommonträdet 5|Telefonplan|Valborgsmässovägen 20D|Till salu|1|26|2|2645|1995000|29 dagar||annons/6302953|2026-11-20
Brf Plommonträdet 5|Telefonplan|Valborgsmässovägen 20A|Till salu|1|31|2|2925|2395000|1 månad||annons/6308854|2026-11-20
Brf Silvergranen 12|Telefonplan|Telefonvägen 23|Till salu|5|120|4|9102|8495000|6 dagar|Visning sön 22 nov kl 14:00.|bostad/765601|2026-11-20
Brf Smältrullen|Telefonplan|Borrvägen 3|Till salu|2|43|1|2997|2995000|5 månader||bostad/4036748|2026-11-20
Brf Tele|Telefonplan|Kransbindarvägen 23|Till salu|2|35|1|3527|2495000|7 dagar|Visning sön 22 nov kl 12:00.|bostad/583567|2026-11-20
Brf Tele|Telefonplan|Cedergrensvägen 58|Till salu|2|51|1|4656|3495000|10 dagar|Visning sön 22 nov kl 11:00.|bostad/583281|2026-11-20
Brf Tellusborgshus|Telefonplan|Cedergrensvägen 49|Till salu|2|51|1|4458|3395000|6 dagar|Visning sön 22 nov kl 14:30.|bostad/583457|2026-11-20
Brf Tellusborgshus|Telefonplan|Valborgsmässovägen 40|Till salu|2|34,5|1|3426|2495000|10 dagar|Budgivning pågår. Visning sön 22 nov kl 14:50.|bostad/782105|2026-11-20
Brf Tellusborgshus|Telefonplan|Valborgsmässovägen 27|Till salu|2|51|2|4458|3495000|12 dagar|Visning sön 22 nov kl 11:30.|annons/6312776|2026-11-20
Brf Tellusborgshus|Telefonplan|Valborgsmässovägen 26|Till salu|2|34,5|1|3426|2495000|13 dagar|Budgivning pågår. Visning sön 22 nov kl 13:40.|bostad/174975|2026-11-20
Brf Tellusborgshus|Telefonplan|Valborgsmässovägen 25|Till salu|3|51|3|4458|2795000|13 dagar|Budgivning pågår.|bostad/782058|2026-11-20
Brf Tellusborgshus|Telefonplan|Cedergrensvägen 47|Till salu|2|51|1|4457|3495000|19 dagar||annons/5516316|2026-11-20
Brf Tellusborgshus|Telefonplan|Cedergrensvägen 31|Till salu|2|51|1|4458|3495000|1 månad|Visning sön 22 nov kl 10:45.|annons/6312768|2026-11-20
Brf The Brick Lignum|Telefonplan|Responsgatan 36|Till salu|2|27|7|2216|2345000|Inkommet igår|Visning sön 22 nov kl 14:20.|bostad/4500722|2026-11-20
Brf The Brick Lignum|Telefonplan|Responsgatan 36|Till salu|2|32|4|2597|2500000|13 dagar|Budgivning pågår.|bostad/4500692|2026-11-20
Brf The Brick Lignum|Telefonplan|Responsgatan 36|Till salu|2|27|5|2216|2145000|1 månad|Visning sön 22 nov kl 14:20.|annons/6285069|2026-11-20
Brf The Brick Lignum|Telefonplan|Responsgatan 36|Till salu|2|31|9|2501|2645000|2 månader|Visning sön 22 nov kl 14:20.|annons/6271564|2026-11-20
Brf The Brick Lignum|Telefonplan|Responsgatan 36|Till salu|2|31|5|2501|2395000|11 månader||annons/5940238|2026-11-20
Brf The Brick Terra|Telefonplan|Responsgatan 14|Till salu|2|46|2|3605|2795000|Inkommet idag|Visning sön 22 nov kl 14:15.|bostad/4384416|2026-11-20
Brf The Brick Terra|Telefonplan|Responsgatan 14|Till salu|1|34|3|2665|2495000|3 dagar|Visning sön 22 nov kl 13:00.|bostad/4384596|2026-11-20
Brf The Brick Terra|Telefonplan|Responsgatan 14|Till salu|2|46|1|3605|2995000|3 dagar|Visning sön 22 nov kl 12:30.|bostad/4377158|2026-11-20
Brf The Brick Terra|Telefonplan|Responsgatan 12|Till salu|2|54|5|4232|2995000|5 dagar|Visning sön 22 nov kl 12:20.|bostad/4377213|2026-11-20
Brf The Brick Terra|Telefonplan|Responsgatan 14|Till salu|2|46|6|3605|2995000|12 dagar|Budgivning pågår. Visning sön 22 nov kl 14:10.|bostad/4384434|2026-11-20
Brf The Brick Terra|Telefonplan|Responsgatan 14|Till salu|1|33|4|2586|2395000|18 dagar|Visning sön 22 nov kl 13:40.|bostad/4377165|2026-11-20
Brf The Brick Terra|Telefonplan|Responsgatan 12|Till salu|1,5|39|3|3057|2295000|1 månad|Visning sön 22 nov kl 12:30.|bostad/4377375|2026-11-20
Brf The Brick Terra|Telefonplan|Responsgatan 12|Till salu|1|35|7|2193|2495000|5 år||annons/4006006|2026-11-20
HSB Brf Tvålflingan i Stockholm|Telefonplan|Tellusborgsvägen 108|Till salu|2|53|6|3901|3750000|11 dagar|Budgivning pågår.|bostad/634786|2026-11-20
Brf Flygplansfabriken|Telefonplan|Tellusborgsvägen 94|Snart till salu|2|46|BV|3564||1 månad||bostad/3926032|2026-11-20
Brf Flygplansfabriken|Telefonplan|Tellusborgsvägen 94|Snart till salu|2|46||3564||3 månader||bostad/3926081|2026-11-20
Brf Flygplansfabriken|Telefonplan|Tellusborgsvägen 94|Snart till salu|3|69|BV|4718||3 år||bostad/3926092|2026-11-20
Brf Insteget|Telefonplan|Tellusborgsvägen 92|Snart till salu|1|37|4|2868||29 dagar||annons/6319030|2026-11-20
Brf Insteget|Telefonplan|Tellusborgsvägen 90|Snart till salu|1,5|35|1|2717||1 månad||bostad/4383073|2026-11-20
Brf Insteget|Telefonplan|Tellusborgsvägen 90|Snart till salu|1,5|35|1|2717|2495000|1 månad|Visning sön 22 nov kl 12:45.|bostad/4372209|2026-11-20
Brf Insteget|Telefonplan|Tellusborgsvägen 90|Snart till salu|1,5|37|4|2868|2695000|1 månad||bostad/4383087|2026-11-20
Brf Insteget|Telefonplan|Tellusborgsvägen 92|Snart till salu|1|36|1|2793||2 månader||bostad/4372390|2026-11-20
Brf Insteget|Telefonplan|Tellusborgsvägen 92|Snart till salu|1|30|6|2264|2495000|2 månader||bostad/4383003|2026-11-20
Brf Insteget|Telefonplan|Tellusborgsvägen 90|Snart till salu|2|47|4|3623|2850000|7 månader||bostad/4372206|2026-11-20
Brf Insteget|Telefonplan|Tellusborgsvägen 90|Snart till salu|1,5|39|1|2858|2595000|9 månader||bostad/4372364|2026-11-20
Brf Insteget|Telefonplan|Tellusborgsvägen 90|Snart till salu|1,5|37|5|2784||1 år||bostad/4383086|2026-11-20
Brf Insteget|Telefonplan|Tellusborgsvägen 92|Snart till salu|1,5|35|4||2995000|2 år||annons/5174173|2026-11-20
Brf Insteget|Telefonplan|Tellusborgsvägen 92|Snart till salu|1|37|2|2417|2495000|3 år||annons/5140108|2026-11-20
Brf Insteget|Telefonplan|Tellusborgsvägen 90|Snart till salu|1|30|6|2155|2695000|3 år||annons/5108134|2026-11-20
Brf Insteget|Telefonplan|Tellusborgsvägen 90|Snart till salu|2|45|6|2658||3 år||annons/5063660|2026-11-20
Brf Kobran Telefonplan|Telefonplan|Flygelgatan 4|Snart till salu|2|41|1|3594||1 månad||bostad/3887879|2026-11-20
Brf Kubisten|Telefonplan|Snickerigatan 10|Snart till salu|2|63|2|4480||13 dagar||bostad/741304|2026-11-20
Brf Metronomen|Telefonplan|Radiusbacken 39|Snart till salu|2|38|5|2912||1 månad||bostad/4096931|2026-11-20
Brf Metronomen|Telefonplan|Radiusbacken 39|Snart till salu|2|51||3910||2 år||annons/5301645|2026-11-20
Brf Plommonträdet 5|Telefonplan|Valborgsmässovägen 20C|Snart till salu|2|44|2|3822||16 dagar||bostad/4373903|2026-11-20
Brf Plommonträdet 5|Telefonplan|Valborgsmässovägen 20A|Snart till salu|2|49|1|4166||3 månader||annons/6219929|2026-11-20
Brf Plommonträdet 5|Telefonplan|Valborgsmässovägen 20B|Snart till salu|1|26|1|2580||12 månader||annons/5931304|2026-11-20
Brf Plommonträdet 5|Telefonplan|Valborgsmässovägen 20B|Snart till salu|2|40|1|3546|2895000|1 år||annons/5845340|2026-11-20
Brf Plommonträdet 5|Telefonplan|Valborgsmässovägen 20D|Snart till salu|1|28|BV|2364||1 år||bostad/4373906|2026-11-20
Brf Plommonträdet 5|Telefonplan|Valborgsmässovägen 20C|Snart till salu|2|54|2|3921|3995000|2 år||annons/5391727|2026-11-20
Brf Plommonträdet 5|Telefonplan|Valborgsmässovägen 20C|Snart till salu|3|52|2|2668||4 år||annons/4833269|2026-11-20
Brf Radiosändaren|Telefonplan|Tångvägen 31|Snart till salu|2|31|BV|2889||7 månader||bostad/4397292|2026-11-20
Brf Radiosändaren|Telefonplan|Tångvägen 31|Snart till salu|3|57|1|||1 år||bostad/4010324|2026-11-20
Brf Tegelmonoliten|Telefonplan|Mobilgatan 10|Snart till salu|3,5|82|3|5651||6 dagar|Visning tor 26 nov kl 17:30.|bostad/4009481|2026-11-20
Brf Tegelmonoliten|Telefonplan|Snickerigatan 9|Snart till salu|3|81|2|5604||13 dagar||bostad/3787050|2026-11-20
Brf Tegelmonoliten|Telefonplan|Snickerigatan 9|Snart till salu|4|96|1|6281||1 månad||annons/6304993|2026-11-20
Brf Tegelmonoliten|Telefonplan|Tellusgången 34|Snart till salu|2,5|66|1|4804|4495000|10 månader||bostad/4009550|2026-11-20
Brf Tele|Telefonplan|Pingstvägen 39|Snart till salu|2|35|2|3528||Inkommet idag||annons/6258767|2026-11-20
Brf Tele|Telefonplan|Pingstvägen 34|Snart till salu|1,5|30|2|3174||2 dagar||bostad/641367|2026-11-20
Brf Tele|Telefonplan|Svandammsplan 8|Snart till salu|1|24|3|2751|1995000|10 dagar||bostad/755396|2026-11-20
Brf Tele|Telefonplan|Cedergrensvägen 20|Snart till salu|2|35|3|3527||16 dagar||bostad/583544|2026-11-20
Brf Tele|Telefonplan|Pingstvägen 46|Snart till salu|1|35|3|3527|2495000|21 dagar||bostad/641411|2026-11-20
Brf Tele|Telefonplan|Cedergrensvägen 18|Snart till salu|2|35|3|3527|2495000|1 månad||annons/6176387|2026-11-20
Brf Tele|Telefonplan|Pingstvägen 28|Snart till salu|2|51|2|4656||1 månad||annons/6312127|2026-11-20
Brf Tele|Telefonplan|Valborgsmässovägen 7|Snart till salu|2|35|2|3527||1 månad||bostad/755423|2026-11-20
Brf Tele|Telefonplan|Pingstvägen 26|Snart till salu|2|51|3|4656||5 månader||bostad/641348|2026-11-20
Brf Tele|Telefonplan|Pingstvägen 30|Snart till salu|2|35|2|3527||5 månader||bostad/641359|2026-11-20
Brf Tele|Telefonplan|Pingstvägen 10|Snart till salu|2|35|2|3527|2695000|8 månader||bostad/51583|2026-11-20
Brf Tele|Telefonplan|LM Ericssons väg 9|Snart till salu|2|51|3|4232||1 år||bostad/583381|2026-11-20
Brf Tele|Telefonplan|LM Ericssons väg 5|Snart till salu|1|35|3|3527||1 år||annons/5700029|2026-11-20
Brf Tele|Telefonplan|Kransbindarvägen 13|Snart till salu|1|35|3|||1 år||annons/5613105|2026-11-20
Brf Tele|Telefonplan|Cedergrensvägen 56|Snart till salu|2|51|2|||3 år||annons/4408593|2026-11-20
Brf Tellusborgshus|Telefonplan|Cedergrensvägen 59|Till salu|2|34,5|3|3426|2495000|Inkommet igår|Visning sön 29 nov kl 14:00.|bostad/583207|2026-11-20
Brf Tellusborgshus|Telefonplan|Valborgsmässovägen 21|Snart till salu|2|51|1|4458||10 dagar||annons/6343100|2026-11-20
Brf Tellusborgshus|Telefonplan|Valborgsmässovägen 22|Snart till salu|2|51|2|4458||1 månad||bostad/174942|2026-11-20
Brf Tellusborgshus|Telefonplan|Valborgsmässovägen 48|Snart till salu|1|26|2|2698|1995000|1 månad||annons/6281053|2026-11-20
Brf Tellusborgshus|Telefonplan|Cedergrensvägen 35|Snart till salu|3|51|1|4458|3495000|8 månader||bostad/583498|2026-11-20
Brf Tellusborgshus|Telefonplan|Valborgsmässovägen 23|Snart till salu|2|51|2|4370||11 månader||bostad/782050|2026-11-20
Brf Tellusborgshus|Telefonplan|Valborgsmässovägen 30|Snart till salu|2|34,5|1|3221|2495000|1 år||bostad/174969|2026-11-20
Brf Tellusborgshus|Telefonplan|Valborgsmässovägen 10|Snart till salu|2|34,5|2|3293||1 år||annons/5953850|2026-11-20
Brf Tellusborgshus|Telefonplan|Valborgsmässovägen 6|Snart till salu|2|34,5|1|2634|2895000|2 år||annons/5227373|2026-11-20
Brf The Brick Lignum|Telefonplan|Tonvalsslingan 15|Snart till salu|2|27|2|||17 dagar||bostad/4500602|2026-11-20
Brf The Brick Lignum|Telefonplan|Tonvalsslingan 15|Snart till salu|2|27|1|2216|2095000|1 månad||bostad/4500576|2026-11-20
Brf The Brick Lignum|Telefonplan|Responsgatan 36|Snart till salu|1|22|1|1795||1 år||bostad/4500641|2026-11-20
Brf The Brick Terra|Telefonplan|Responsgatan 14|Snart till salu|2|46|1|3605||2 dagar||annons/6351167|2026-11-20
Brf The Brick Terra|Telefonplan|Responsgatan 12|Snart till salu|1,5|34|2|2665|2195000|1 månad|Visning idag kl 16:45.|bostad/4384453|2026-11-20
Brf The Brick Terra|Telefonplan|Responsgatan 14|Snart till salu|2|46|4|3605||4 månader||annons/6187181|2026-11-20
Brf The Brick Terra|Telefonplan|Responsgatan 14|Snart till salu|2|46|BV|3605||5 månader||bostad/4377159|2026-11-20
Brf The Brick Terra|Telefonplan|Responsgatan 12|Snart till salu|2|46|5|3605||1 år||annons/5917274|2026-11-20
Brf The Brick Terra|Telefonplan|Responsgatan 12|Snart till salu|2|46|1|3135||1 år||bostad/4384445|2026-11-20
Brf The Brick Terra|Telefonplan|Responsgatan 18|Snart till salu|1,5|37|7|2900||1 år||bostad/4383299|2026-11-20
Brf The Brick Terra|Telefonplan|Responsgatan 12|Snart till salu|1|35|1|2385||2 år||annons/5202839|2026-11-20
Brf The Brick Terra|Telefonplan|Responsgatan 14|Snart till salu|1|34|7|2663||3 år||annons/4998997|2026-11-20
Brf Torghusen|Telefonplan|Huvudfabriksgatan 4|Snart till salu|3|79|3|6167||1 månad||annons/6287698|2026-11-20
HSB Brf Tvålflingan i Stockholm|Telefonplan|Tellusborgsvägen 108|Snart till salu|4,5|87|1|||9 år||annons/3026445|2026-11-20
Brf Bokbindarvägen 78|Hägerstensåsen|Bokbindarvägen 78|Snart till salu|2|50|4|5106||Inkommet idag||bostad/336076|2026-11-20
`,

  foreningar: `
Brf Aktien 3|Hägerstensåsen|38|1945|2000|53910|Tomträtt
Brf Arvodet 2|Hägerstensåsen|30|1944|2007|75960|Äger marken
Brf Arvodet-Kvittensen|Hägerstensåsen|48|1946|2001|80612|Äger marken
Brf Assuransen Hägersten|Hägerstensåsen|||2003||
Brf Avgiften 1|Hägerstensåsen|23||1984||
Brf Bergsparken|Hägerstensåsen|86||2004|55196|Tomträtt
Brf Bokbindaren|Hägerstensåsen|26||2005||
Brf Bokbindarvägen 72|Hägerstensåsen|||2003||
Brf Bokbindarvägen 76|Hägerstensåsen|||2006||
Brf Bokbindarvägen 78|Hägerstensåsen|36|1944|2008|81222|Äger marken
Brf Dagtraktamentet nr 3 och 4|Hägerstensåsen|36||1980|54273|Äger marken
Brf Dörrar på glänt|Hägerstensåsen|||2005||
Brf Flygplansfabriken|Telefonplan|73|2015|2007|78743|Äger marken
Brf Förskottet 4|Hägerstensåsen|36||2004|268656|Äger marken
Brf Gåvoskatten 3 o 4|Hägerstensåsen|30||1978|49815|Äger marken
Brf Handpenningen|Hägerstensåsen|40|1947|2004|260500|Äger marken
Brf Handpressen 6|Hägerstensåsen|4||2006||
Brf Hypoteket|Hägerstensåsen|||2004||
Brf Hägerstenshöjden|Hägerstensåsen|65|1952|1996|51780|Äger marken
Brf Högst på Åsen|Hägerstensåsen|26|1947|2001||
Brf Insteget|Telefonplan|255|1972|2007|46316|Äger marken
Brf Intecknaren|Hägerstensåsen|20||2011||
Brf Kobran Telefonplan|Telefonplan|55|2012|2010|78809|Äger marken
Brf Kofferten|Hägerstensåsen|67|1948|2004|53270|Äger marken
Brf Kronan i Stockholm|Hägerstensåsen|83||1989|83193|Tomträtt
Brf Kubisten|Telefonplan|62||2011|76371|Äger marken
Brf Kvittensen 3|Hägerstensåsen|18||1983||
Brf Köpeskillingen 2|Hägerstensåsen|||2012||
Brf Lineotypen 9|Hägerstensåsen|||2005||
Brf Lotteriet|Hägerstensåsen|18||2004||
Brf Lotteriet 12|Hägerstensåsen|||2008||
Brf Lotteriet 3|Hägerstensåsen|18||2004||
Brf Lotterivägen 19-37|Hägerstensåsen|59|1947|2004|63674|Äger marken
Brf Metronomen|Telefonplan|188||2015|79880|Äger marken
Brf Motvind|Hägerstensåsen|25|1944|2000||
Brf Mäklaren 1|Hägerstensåsen|21|1945|2008||
Brf Mäklaren 7|Hägerstensåsen|||2012||
Brf Nattläxan|Hägerstensåsen|20|1986|2004||
Brf Obligationen 4|Hägerstensåsen|30|1945|2005|79288|Tomträtt
Brf Obligationen 5|Hägerstensåsen|30||2005|48338|Tomträtt
Brf Obligationen 7|Hägerstensåsen|||1990||
Brf Plommonträdet 5|Telefonplan|84|2018|2016|274599|Tomträtt
Brf Radiosändaren|Telefonplan|68|1944|1943|45569|Tomträtt
Brf Rosenhöjden|Hägerstensåsen|35|2000|1999|57588|Äger marken
Brf Räkningen 1|Hägerstensåsen|25|1947|1987||
Brf Räkningen 2|Hägerstensåsen|18||1987||
Brf Sedelpressen|Hägerstensåsen|24|2014|2010||
Brf Silvergranen 12|Telefonplan|103|1993|2007|49584|Tomträtt
Brf Skattsedeln 1|Hägerstensåsen|65||2004|96606|Äger marken
Brf Skattsedeln 3|Hägerstensåsen|36|1947|2004|78991|Äger marken
Brf Skattsedeln 6|Hägerstensåsen|25|1946|2004||
Brf Skorstenen|Hägerstensåsen|36|1946|2004|54107|Äger marken
Brf Smältrullen|Telefonplan|75||2008|56058|Äger marken
Brf Sparbanksboken 5|Hägerstensåsen|||2005||
Brf Sparboken 4|Hägerstensåsen|31|1946|2007|46225|Tomträtt
Brf Stora Arvodet 22|Hägerstensåsen|||2012||
Brf Tegelmonoliten|Telefonplan|107|2015|2012|74035|Äger marken
Brf Tegelpannan|Hägerstensåsen|||2005||
Brf Tele|Telefonplan|516|1940|1940|46028|Tomträtt
Brf Telefoncentralen|Telefonplan|157|2022||282309|Äger marken
Brf Tellusborgshus|Telefonplan|350|1939|1938|44291|Tomträtt
Brf The Brick Lignum|Telefonplan|204|2023|2016|286593|Äger marken
Brf The Brick Terra|Telefonplan|346|1974|2013|278354|Äger marken
Brf Torghusen|Telefonplan|113|2009|2007|43407|Äger marken
Brf Tryckarket 4|Hägerstensåsen|55|1944|2000|76865|Äger marken
Brf Tryckpressen 3|Hägerstensåsen|18|1944|1999||
Brf Tryckpressen 4|Hägerstensåsen|20|1942|2002||
Brf Tryckpressen nr 5|Hägerstensåsen|12||1980||
Brf Tryckstenen 3|Hägerstensåsen|19|1939|2001||
Brf Trycksvärtan|Hägerstensåsen|24|2006|2005||
Brf Trycksvärtan 2|Hägerstensåsen|11|1946|2004||
Brf Trycksvärtan 7|Hägerstensåsen|15||2003||
Brf Trädkronan|Hägerstensåsen|51||2006|267262|Tomträtt
Brf Värnskatten 5|Hägerstensåsen|32|1946|2001|78046|Äger marken
Brf Åsens oas|Hägerstensåsen|24|1945|2004||
Brf Ängsblomman|Telefonplan|53|2011|2007|49926|Äger marken
Brf Ängsgräset|Telefonplan|54|2010|2007|52693|Äger marken
HSB Brf Tvålflingan i Stockholm|Telefonplan|167|2008|2005|55027|Äger marken
HSB Brf Växeln|Telefonplan|217|2024|2017|286779|Äger marken
`,

  andringar: `
2026-11-20|Brf Tellusborgshus|Cedergrensvägen 59|Gick från snart till salu till till salu, utropspris 2 495 000 kr.
2026-11-19|Brf Bokbindarvägen 78|Bokbindarvägen 78|Ny annons: 2 rum, 50 m², snart till salu.
`
};
