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
Brf Bäckvägen 46-52|Midsommarkransen|Bäckvägen 50|Till salu|3|77|1|5249|5795000|4 dagar|Visning sön 22 nov kl 12:15.|bostad/417149|2026-11-20
Brf Papperskniven|Midsommarkransen|Fastlagsvägen 23|Till salu|2|49|2|4900|3195000|16 dagar|Budgivning pågår.|bostad/571491|2026-11-20
Brf Reservoarpennan 5|Midsommarkransen|Fastlagsvägen 63|Snart till salu|2|54|2|||1 år||bostad/571359|2026-11-20
Brf Hundrovan 3|Midsommarkransen|Valsbergs gränd 5|Snart till salu|2|44|1|3371||2 månader||annons/6269735|2026-11-20
Brf Månhästen|Midsommarkransen|Fastlagsvägen 42|Snart till salu|1,5|45|1|2834||6 månader||bostad/571443|2026-11-20
Brf Midsommarblomman|Midsommarkransen|Midsommargränd 5|Snart till salu|2,5|48|3|2266||15 dagar||bostad/674018|2026-11-20
Brf Midsommarblomman|Midsommarkransen|Midsommargränd 9|Snart till salu|2|44||2087||1 månad||bostad/674023|2026-11-20
Brf Violen nr 14|Midsommarkransen|Nioörtsvägen 40|Snart till salu|1,5|40|4|3525|2495000|1 månad|Visning sön 22 nov kl 12:20.|bostad/682885|2026-11-20
Brf Korpen|Midsommarkransen|Mellanbergsvägen 19|Snart till salu|3|51||4467||12 dagar||bostad/129394|2026-11-20
Brf Korpen|Midsommarkransen|Hökmossevägen 64|Snart till salu|2|39|1|3416||1 månad||bostad/129340|2026-11-20
Brf Korpen|Midsommarkransen|Hökmossevägen 62|Snart till salu|2|51|3|4467||1 månad||annons/6285969|2026-11-20
Brf Midsommarbuketten|Midsommarkransen|Tellusborgsvägen 65C|Till salu|2|60|1|4209|4495000|11 dagar|Visning sön 22 nov kl 14:20.|annons/6282306|2026-11-20
Brf Midsommarbuketten|Midsommarkransen|Tellusborgsvägen 65C|Till salu|2|38|1|3028|2995000|1 månad|Visning sön 22 nov kl 13:45.|bostad/673988|2026-11-20
Brf Midsommarbuketten|Midsommarkransen|Midsommargränd 6|Snart till salu|3|61|2|||1 månad||annons/6302734|2026-11-20
Brf Krassen|Midsommarkransen|Tellusborgsvägen 33|Till salu|3|65|4|4574|4395000|10 dagar|Visning sön 22 nov kl 13:30.|bostad/667044|2026-11-20
Brf Violen i Midsommarkransen|Midsommarkransen|Midsommarparken 5A|Snart till salu|2|68|4|3824||5 månader||annons/6174084|2026-11-20
Svenska Folkbyggen Brf Nr 6|Midsommarkransen|Kyndelsmässogränd 7|Till salu|3|57|3|3724||2 dagar|Visning sön 22 nov kl 12:15.|bostad/649926|2026-11-20
Brf Bläckpennan|Midsommarkransen|Nyårsvägen 20|Snart till salu|3|81|2|5535||1 månad||bostad/689227|2026-11-20
Brf Bläckpennan|Midsommarkransen|Nyårsvägen 10|Snart till salu|4|86|3|5671||1 månad||annons/6269726|2026-11-20
Brf Bläckpennan|Midsommarkransen|Nyårsvägen 10|Snart till salu|3|74|0,5|5056||7 månader||annons/6063778|2026-11-20
Brf Vildrosen|Midsommarkransen|Nioörtsvägen 28A|Till salu|2|62,5|4|4954||3 dagar|Visning mån 23 nov kl 17:45.|annons/6345917|2026-11-20
Brf Vildrosen|Midsommarkransen|Nioörtsvägen 28B|Snart till salu|3|76,8|4|6097||1 månad||bostad/4381687|2026-11-20
Brf Vildrosen|Midsommarkransen|Nioörtsvägen 28B|Snart till salu|3|76,8|2|6097||2 månader||bostad/4374072|2026-11-20
Brf Dvärgbjörken 12 I Hägersten|Midsommarkransen|Tellusborgsvägen 50|Snart till salu|2|50|2|3875||2 dagar||bostad/692489|2026-11-20
Brf Dvärgbjörken 12 I Hägersten|Midsommarkransen|Oktobergatan 8|Till salu|2|41||3020|2750000|18 dagar||annons/6096106|2026-11-20
Brf Dvärgbjörken 12 I Hägersten|Midsommarkransen|Oktobergatan 12|Snart till salu|2|41|2|3178||2 månader||bostad/692471|2026-11-20
Brf Dvärgbjörken 12 I Hägersten|Midsommarkransen|Tellusborgsvägen 50|Snart till salu|2|50|1|3122||5 månader||annons/6145717|2026-11-20
Brf Maskrosen 3 i Midsommarkransen|Midsommarkransen|Svandammsvägen 23|Till salu|1|38|-1|2571|2695000|16 dagar||bostad/4012558|2026-11-20
Brf Maskrosen 3 i Midsommarkransen|Midsommarkransen|Svandammsvägen 21A|Till salu|1|25|3|1806|2195000|21 dagar|Visning sön 22 nov.|bostad/4012553|2026-11-20
Brf Maskrosen 3 i Midsommarkransen|Midsommarkransen|Svandammsvägen 21A|Snart till salu|2|39|2|2638|2795000|9 månader||annons/5991839|2026-11-20
Brf Midsommarparken|Midsommarkransen|Svandammsvägen 17A|Snart till salu|1,5|42|-1|3510||6 dagar||bostad/399494|2026-11-20
Brf Åkervindan|Midsommarkransen|Vattenledningsvägen 47|Snart till salu|1|35|3|4303|2195000|7 månader||bostad/784511|2026-11-20
Brf Blomsteräng|Midsommarkransen|Radiusbacken 6|Snart till salu|2|52|4|4184||8 månader||bostad/704316|2026-11-20
Riksbyggen Brf Stockholmshus nr 7|Midsommarkransen|Tångvägen 21|Till salu|2|44,5|3|3852|2195000|3 dagar|Visning sön 22 nov kl 14:45.|bostad/129523|2026-11-20
Riksbyggen Brf Stockholmshus nr 7|Midsommarkransen|Hökmossevägen 7|Snart till salu|2|42,5|1|3492||2 månader||bostad/129285|2026-11-20
Brf Mälarglimt|Midsommarkransen|Bäckvägen 92A|Snart till salu|2|52|-1|3566|2495000|27 dagar||bostad/418370|2026-11-20
Brf Mälarglimt|Midsommarkransen|Bäckvägen 92B|Snart till salu|2|40|1|2743||1 månad|Visning tis 24 nov.|bostad/418364|2026-11-20
Brf Blåklockan i Midsommarkransen|Midsommarkransen|Johannesbergsgatan 3|Till salu|1|28|2|2581|1995000|17 dagar|Budgivning pågår.|bostad/142238|2026-11-20
Brf Blåklockan i Midsommarkransen|Midsommarkransen|Johannesbergsgatan 3|Snart till salu|2|36|2|3328||17 dagar||bostad/142235|2026-11-20
Brf Blåklockan i Midsommarkransen|Midsommarkransen|Johannesbergsgatan 3|Snart till salu|1,5|36|3|3483||26 dagar||bostad/142230|2026-11-20
Brf Blåklockan i Midsommarkransen|Midsommarkransen|Johannesbergsgatan 3|Snart till salu|2|39||3608|1995000|3 månader||annons/6178005|2026-11-20
Brf Blåklockan i Midsommarkransen|Midsommarkransen|Johannesbergsgatan 3|Snart till salu|1|28|1|2151||4 år||bostad/142243|2026-11-20
Brf Konvolv|Midsommarkransen|Vattenledningsvägen 45|Snart till salu|1,5|38|1|3524||2 månader||bostad/784488|2026-11-20
Brf Vattenledningsvägen 51|Midsommarkransen|Vattenledningsvägen 51|Snart till salu|2|35|1,5|4099|2795000|1 månad|Visning sön 29 nov kl 12:00.|bostad/784544|2026-11-20
Brf Svenska Folkbyggen nr 3|Midsommarkransen|Kyndelsmässogränd 12|Till salu|3|54,5|3|5309|3995000|7 dagar|Visning sön 22 nov kl 14:30.|bostad/649882|2026-11-20
Brf Svenska Folkbyggen nr 3|Midsommarkransen|Kyndelsmässogränd 14|Snart till salu|3|54,5|3|5309||9 dagar|Visning sön 22 nov kl 14:00.|annons/6344953|2026-11-20
Brf Svenska Folkbyggen nr 3|Midsommarkransen|Kyndelsmässogränd 12|Snart till salu|2|54,5|2|5309|3995000|17 dagar||bostad/649880|2026-11-20
Brf Svenska Folkbyggen nr 3|Midsommarkransen|Kyndelsmässogränd 13|Snart till salu|2|42|1|4093||3 månader||bostad/649863|2026-11-20
Brf Krassen Nr 5|Midsommarkransen|Lötmogatan 7|Snart till salu|2|36|1|4111||Inkommet igår||bostad/2155526|2026-11-20
Brf Idegranen 6|Midsommarkransen|Majstångsvägen 11|Snart till salu|2|40|1|||1 månad||bostad/668418|2026-11-20
Brf Radiusfabriken|Midsommarkransen|Radiusbacken 23|Till salu|3|73|1|5569|6495000|Inkommet idag|Visning tor 26 nov kl 17:00.|annons/6266379|2026-11-20
Brf Radiusfabriken|Midsommarkransen|Radiusbacken 21|Snart till salu|2|58|4|3661||15 dagar||annons/6337621|2026-11-20
Brf Enen 25|Midsommarkransen|Tellusborgsvägen 66|Snart till salu|2|45|2|3318||Inkommet igår||annons/6354541|2026-11-20
Brf Grillstugan|Midsommarkransen|Vattenledningsvägen 49|Snart till salu|1|32|1|2664||2 månader||bostad/784528|2026-11-20
Brf Hundrovan 5|Midsommarkransen|Johannesbergsgatan 4A|Till salu|2|32||3558|2495000|14 dagar|Budgivning pågår.|annons/6340565|2026-11-20
Brf Hundrovan 5|Midsommarkransen|Johannesbergsgatan 4|Snart till salu|1|30|2|3224||1 månad||bostad/142221|2026-11-20
Brf Raderkniven 2 i Stockholm|Midsommarkransen|Fastlagsvägen 74|Snart till salu|1|26||1964|1995000|5 år||annons/4211172|2026-11-20
Brf Nässlan 5|Midsommarkransen|Tegelbruksvägen 12|Snart till salu|3|66|0,5|4533|5195000|5 månader||bostad/764009|2026-11-20
Brf Tångspiken|Midsommarkransen|Tångvägen 46|Till salu|3|56|2|5288|2995000|1 månad|Visning sön 22 nov kl 12:30.|bostad/800616|2026-11-20
Brf Tångspiken|Midsommarkransen|Spikvägen 49|Snart till salu|2|41|1|||1 år||bostad/800600|2026-11-20
Brf Tångspiken|Midsommarkransen|Spikvägen 53|Snart till salu|2|41|2|4261||2 år||bostad/800605|2026-11-20
Brf Vildrosen Nr 9|Midsommarkransen|Svandammsvägen 3|Snart till salu|1,5|35,5|2|2724||22 dagar||bostad/4010386|2026-11-20
Brf Penseldraget|Midsommarkransen|Valborgsmässovägen 16|Till salu|3|66|5|4586|4995000|9 dagar|Budgivning pågår.|bostad/782084|2026-11-20
Brf Papperskniven 4|Midsommarkransen|Bäckvägen 42|Snart till salu|3|61|1|5630||8 månader||bostad/417187|2026-11-20
Brf Hoppet 42|Midsommarkransen|Hökmossevägen 36A|Till salu|1|26|1|2314|1745000|3 månader||bostad/129440|2026-11-20
Brf Spolen 4|Midsommarkransen|Mejselvägen 48|Snart till salu|4|96||5984||5 månader||bostad/672698|2026-11-20
Brf Aprilgatan 12|Midsommarkransen|Aprilgatan 12C|Snart till salu|4|88|1|4686||24 dagar||annons/6326247|2026-11-20
Brf Antennen 2|Midsommarkransen|Tångvägen 42|Till salu|3|58|1|5397|2595000|1 månad|Visning sön 22 nov kl 11:00.|bostad/778024|2026-11-20
Brf Tellusborg|Midsommarkransen|Aprilgatan 2C|Till salu|6|131|2|9275|12500000|21 dagar||annons/6302729|2026-11-20
Brf Tellusborg|Midsommarkransen|Majstångsvägen 3|Snart till salu|4|97|2|6565||10 månader||annons/5986510|2026-11-20
Brf Tellusborg|Midsommarkransen|Ringdansvägen 1F|Snart till salu|3|74|3|4547||2 år||annons/5442228|2026-11-20
Brf Kåpan 2|Midsommarkransen|Filvägen 8|Snart till salu|2|54|2|5764|2795000|1 månad|Budgivning pågår.|bostad/573580|2026-11-20
Brf Kåpan 2|Midsommarkransen|Filvägen 8|Snart till salu|3|54|1|4366||4 år||bostad/573582|2026-11-20
Brf Kåpan 2|Midsommarkransen|Filvägen 8|Snart till salu|2|52|2|4206||4 år||bostad/573581|2026-11-20
Brf Svenska Folkbyggen nr 2|Midsommarkransen|Hökmossevägen 23|Snart till salu|2|44|1|4263||2 månader||bostad/4369313|2026-11-20
Brf Spolen i Hägersten|Midsommarkransen|Mejselvägen 44|Till salu|1|26|-1|2498|1500000|1 månad|Visning sön 22 nov.|annons/6314699|2026-11-20
Brf Rullen 1|Midsommarkransen|Mejselvägen 39|Snart till salu|1|32|3|3193|2295000|3 månader||bostad/672679|2026-11-20
Brf Martallen|Midsommarkransen|Svandammsvägen 37|Snart till salu|2|47|2|3541|3995000|1 månad||bostad/3994519|2026-11-20
Brf ApartHotel Attaché|Midsommarkransen|Cedergrensvägen 16|Till salu|2|28,5|4|5062|1550000|7 dagar|Budgivning pågår.|annons/5703151|2026-11-20
Brf ApartHotel Attaché|Midsommarkransen|Cedergrensvägen 16|Till salu|1|16|1|2842|1100000|28 dagar||annons/6322237|2026-11-20
Brf ApartHotel Attaché|Midsommarkransen|Cedergrensvägen 16|Till salu|1|40|4|5683|2150000|1 månad||annons/6306950|2026-11-20
Brf ApartHotel Attaché|Midsommarkransen|Cedergrensvägen 16|Snart till salu|2|26|4|4618|1695000|3 månader||annons/5262478|2026-11-20
Brf ApartHotel Attaché|Midsommarkransen|Cedergrensvägen 16|Till salu|1|17||2415|1095000|1 år||annons/5727099|2026-11-20
Brf ApartHotel Attaché|Midsommarkransen|Cedergrensvägen 16|Snart till salu|1|18|1|3197|1090000|2 år||annons/5538250|2026-11-20
Brf ApartHotel Attaché|Midsommarkransen|Cedergrensvägen 16|Till salu|1|16||1817|1250000|4 år||annons/4578369|2026-11-20
Brf Midsommarkransens Martall 37|Midsommarkransen|Svandammsvägen 31A|Snart till salu|1|44|1|4233||1 månad||bostad/4012572|2026-11-20
Brf Kransbindaren|Midsommarkransen|Kransbindarvägen 22|Till salu|2|33|1|3623|2195000|24 dagar|Visning sön 22 nov kl 11:00.|bostad/641285|2026-11-20
Brf Martallen 2526|Midsommarkransen|Midsommarvägen 80|Till salu|3|78|1|6357||7 dagar|Visning idag.|bostad/4309375|2026-11-20
Brf Tellus 53|Midsommarkransen|Vattenledningsvägen 53|Snart till salu|1|18|-1|1646||2 månader||bostad/4506147|2026-11-20
HSB Brf Dialogen|Midsommarkransen|Tellusgatan 4C|Snart till salu|2|46||4415||2 år||bostad/4394831|2026-11-20
Brf Boston|Midsommarkransen|Tellusborgsvägen 42|Till salu|4|107|4|7009|8495000|3 dagar|Visning sön 22 nov kl 14:00.|bostad/4511573|2026-11-20
Brf Boston|Midsommarkransen|Tellusborgsvägen 40|Till salu|2|51|3|4179|4295000|2 månader||bostad/4512431|2026-11-20
Brf Boston|Midsommarkransen|Tellusborgsvägen 40|Snart till salu|4|93|3|6399||2 månader||bostad/4515239|2026-11-20
Brf The Brick Rubigo|Midsommarkransen|Diavoxvägen 32|Snart till salu|1|26|8|2330||1 månad||bostad/4540557|2026-11-20
Brf The Brick Rubigo|Midsommarkransen|Diavoxvägen 32|Till salu|1|32|4|2868|2495000|8 månader||bostad/4540535|2026-11-20
Brf The Brick Rubigo|Midsommarkransen|Diavoxvägen 32|Till salu|2|34|2|3047|2395000|9 månader|Visning sön 22 nov kl 14:40.|bostad/4540518|2026-11-20
Brf The Brick Rubigo|Midsommarkransen|Diavoxvägen 32|Till salu|2|34|3|3047|2625000|10 månader||bostad/4540519|2026-11-20
Brf Konvolvulus 9|Midsommarkransen|Vattenledningsvägen 39|Till salu|2|30|1|2164|2650000|1 månad||annons/6305737|2026-11-20
Brf Blyertspennan 4|Midsommarkransen|Nyårsvägen 15|Till salu|3|53|1|3531|2795000|7 dagar|Visning sön 22 nov kl 13:45.|bostad/4580473|2026-11-20
`,

  foreningar: `
Brf Aktien 3|Hägerstensåsen|38|1945|2000|53910|Tomträtt
Brf Antennen 2|Midsommarkransen|12|1944||266755|Tomträtt
Brf ApartHotel Attaché|Midsommarkransen|91|||275423|Tomträtt
Brf Aprilgatan 12|Midsommarkransen|20|1911||266732|Äger marken
Brf Arvodet 2|Hägerstensåsen|30|1944|2007|75960|Äger marken
Brf Arvodet-Kvittensen|Hägerstensåsen|48|1946|2001|80612|Äger marken
Brf Assuransen Hägersten|Hägerstensåsen|||2003||
Brf Avgiften 1|Hägerstensåsen|23||1984||
Brf Bergsparken|Hägerstensåsen|86||2004|55196|Tomträtt
Brf Blomsteräng|Midsommarkransen|47|2011||78744|Äger marken
Brf Blyertspennan 4|Midsommarkransen||||298929|
Brf Blåklockan i Midsommarkransen|Midsommarkransen|27|1938||79031|Äger marken
Brf Bläckpennan|Midsommarkransen|41|1947||57438|Tomträtt
Brf Bokbindaren|Hägerstensåsen|26||2005||
Brf Bokbindarvägen 72|Hägerstensåsen|||2003||
Brf Bokbindarvägen 76|Hägerstensåsen|||2006||
Brf Bokbindarvägen 78|Hägerstensåsen|36|1944|2008|81222|Äger marken
Brf Boston|Midsommarkransen|47|||286098|Äger marken
Brf Bäckvägen 46-52|Midsommarkransen|38|||47438|Tomträtt
Brf Dagtraktamentet nr 3 och 4|Hägerstensåsen|36||1980|54273|Äger marken
Brf Dvärgbjörken 12 I Hägersten|Midsommarkransen|30|||68273|Tomträtt
Brf Dörrar på glänt|Hägerstensåsen|||2005||
Brf Enen 25|Midsommarkransen|34|1939||81017|Äger marken
Brf Flygplansfabriken|Telefonplan|73|2015|2007|78743|Äger marken
Brf Förskottet 4|Hägerstensåsen|36||2004|268656|Äger marken
Brf Grillstugan|Midsommarkransen|10|1934||81075|Äger marken
Brf Gåvoskatten 3 o 4|Hägerstensåsen|30||1978|49815|Äger marken
Brf Handpenningen|Hägerstensåsen|40|1947|2004|260500|Äger marken
Brf Handpressen 6|Hägerstensåsen|4||2006||
Brf Hoppet 42|Midsommarkransen|32|1944||234216|Tomträtt
Brf Hundrovan 3|Midsommarkransen|126|1943||49567|Tomträtt
Brf Hundrovan 5|Midsommarkransen|13|1936||82016|Äger marken
Brf Hypoteket|Hägerstensåsen|||2004||
Brf Hägerstenshöjden|Hägerstensåsen|65|1952|1996|51780|Äger marken
Brf Högst på Åsen|Hägerstensåsen|26|1947|2001||
Brf Idegranen 6|Midsommarkransen|13|||80346|Äger marken
Brf Insteget|Telefonplan|255|1972|2007|46316|Äger marken
Brf Intecknaren|Hägerstensåsen|20||2011||
Brf Kobran Telefonplan|Telefonplan|55|2012|2010|78809|Äger marken
Brf Kofferten|Hägerstensåsen|67|1948|2004|53270|Äger marken
Brf Konvolv|Midsommarkransen|12|||79485|Äger marken
Brf Konvolvulus 9|Midsommarkransen||||298755|
Brf Korpen|Midsommarkransen|114|||52187|Äger marken
Brf Kransbindaren|Midsommarkransen|47|||277086|Äger marken
Brf Krassen|Midsommarkransen|41|1992||53743|Tomträtt
Brf Krassen Nr 5|Midsommarkransen|30|2010||80171|Äger marken
Brf Kronan i Stockholm|Hägerstensåsen|83||1989|83193|Tomträtt
Brf Kubisten|Telefonplan|62||2011|76371|Äger marken
Brf Kvittensen 3|Hägerstensåsen|18||1983||
Brf Kåpan 2|Midsommarkransen|12|1944||267567|Tomträtt
Brf Köpeskillingen 2|Hägerstensåsen|||2012||
Brf Lineotypen 9|Hägerstensåsen|||2005||
Brf Lotteriet|Hägerstensåsen|18||2004||
Brf Lotteriet 12|Hägerstensåsen|||2008||
Brf Lotteriet 3|Hägerstensåsen|18||2004||
Brf Lotterivägen 19-37|Hägerstensåsen|59|1947|2004|63674|Äger marken
Brf Martallen|Midsommarkransen|61|1929||274735|Äger marken
Brf Martallen 2526|Midsommarkransen|29|1943||280356|Tomträtt
Brf Maskrosen 3 i Midsommarkransen|Midsommarkransen|42|1939||76365|Äger marken
Brf Metronomen|Telefonplan|188||2015|79880|Äger marken
Brf Midsommarblomman|Midsommarkransen|54|2007||51539|Äger marken
Brf Midsommarbuketten|Midsommarkransen|112|2009||53552|Äger marken
Brf Midsommarkransens Martall 37|Midsommarkransen|17|1939||276171|Äger marken
Brf Midsommarparken|Midsommarkransen|43|1938||78277|Äger marken
Brf Motvind|Hägerstensåsen|25|1944|2000||
Brf Månhästen|Midsommarkransen|94|1993||49688|Tomträtt
Brf Mäklaren 1|Hägerstensåsen|21|1945|2008||
Brf Mäklaren 7|Hägerstensåsen|||2012||
Brf Mälarglimt|Midsommarkransen|20|1942||78873|Tomträtt
Brf Nattläxan|Hägerstensåsen|20|1986|2004||
Brf Nässlan 5|Midsommarkransen|14|2000||82380|Äger marken
Brf Obligationen 4|Hägerstensåsen|30|1945|2005|79288|Tomträtt
Brf Obligationen 5|Hägerstensåsen|30||2005|48338|Tomträtt
Brf Obligationen 7|Hägerstensåsen|||1990||
Brf Papperskniven|Midsommarkransen|24|1944||49244|Tomträtt
Brf Papperskniven 4|Midsommarkransen|19|||221841|Tomträtt
Brf Penseldraget|Midsommarkransen|14|2008||161974|Tomträtt
Brf Plommonträdet 5|Telefonplan|84|2018|2016|274599|Tomträtt
Brf Raderkniven 2 i Stockholm|Midsommarkransen|14|1942||82315|Tomträtt
Brf Radiosändaren|Telefonplan|68|1944|1943|45569|Tomträtt
Brf Radiusfabriken|Midsommarkransen|50|||80943|Äger marken
Brf Reservoarpennan 5|Midsommarkransen|19|1943||49552|Tomträtt
Brf Rosenhöjden|Hägerstensåsen|35|2000|1999|57588|Äger marken
Brf Rullen 1|Midsommarkransen|12|1944||273947|Tomträtt
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
Brf Spolen 4|Midsommarkransen|22|2007||245457|Tomträtt
Brf Spolen i Hägersten|Midsommarkransen|45|1980||271716|Tomträtt
Brf Stora Arvodet 22|Hägerstensåsen|||2012||
Brf Svenska Folkbyggen nr 2|Midsommarkransen|36|1944||268345|Tomträtt
Brf Svenska Folkbyggen nr 3|Midsommarkransen|59|||80162|Tomträtt
Brf Tegelmonoliten|Telefonplan|107|2015|2012|74035|Äger marken
Brf Tegelpannan|Hägerstensåsen|||2005||
Brf Tele|Telefonplan|516|1940|1940|46028|Tomträtt
Brf Telefoncentralen|Telefonplan|157|2022||282309|Äger marken
Brf Tellus 53|Midsommarkransen|16|||283569|Äger marken
Brf Tellusborg|Midsommarkransen|218|1945||267424|Äger marken
Brf Tellusborgshus|Telefonplan|350|1939|1938|44291|Tomträtt
Brf The Brick Lignum|Telefonplan|204|2023|2016|286593|Äger marken
Brf The Brick Rubigo|Midsommarkransen||||286975|
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
Brf Tångspiken|Midsommarkransen|34|1944||83073|Tomträtt
Brf Vattenledningsvägen 51|Midsommarkransen|12|||79713|Äger marken
Brf Vildrosen|Midsommarkransen|31|1973||57659|Äger marken
Brf Vildrosen Nr 9|Midsommarkransen|24|||83669|Äger marken
Brf Violen i Midsommarkransen|Midsommarkransen|69|1939||55726|Äger marken
Brf Violen nr 14|Midsommarkransen|34|1983||51749|Äger marken
Brf Värnskatten 5|Hägerstensåsen|32|1946|2001|78046|Äger marken
Brf Åkervindan|Midsommarkransen|15|2005||78665|Äger marken
Brf Åsens oas|Hägerstensåsen|24|1945|2004||
Brf Ängsblomman|Telefonplan|53|2011|2007|49926|Äger marken
Brf Ängsgräset|Telefonplan|54|2010|2007|52693|Äger marken
HSB Brf Dialogen|Midsommarkransen|37|2023||284868|Äger marken
HSB Brf Tvålflingan i Stockholm|Telefonplan|167|2008|2005|55027|Äger marken
HSB Brf Växeln|Telefonplan|217|2024|2017|286779|Äger marken
Riksbyggen Brf Stockholmshus nr 7|Midsommarkransen|106|1944||78870|Tomträtt
Svenska Folkbyggen Brf Nr 6|Midsommarkransen|33|1946||55849|Tomträtt
`,

  andringar: `
2026-11-20|Midsommarkransen||Nytt område: 57 föreningar och 99 annonser tillagda.
2026-11-20|Brf Tellusborgshus|Cedergrensvägen 59|Gick från snart till salu till till salu, utropspris 2 495 000 kr.
2026-11-19|Brf Bokbindarvägen 78|Bokbindarvägen 78|Ny annons: 2 rum, 50 m², snart till salu.
`
};
