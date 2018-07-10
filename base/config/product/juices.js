const juices = module.exports = {
  urls: {
    lineChart: 'http://a2id.02.xspreview.pl/api/data/import.json?v_value=value|sum&v_weight=weight|sum&v_value_per_weight=(value|sum)/(weight|sum)&v_commodityCode=commodityCode&v_year=year&v_commodityName=type&v_countryId=countryId&v_country=countryName&where=countryName%3C%3EWorld,countryName%3C%3Ear-World,commodityCode=(200911;200912;200919;200921;200929;200931;200939;200941;200949;200961;200969;200971;200979;200981;200989;200990;200950;200980),year=(2006;2007;2008;2009;2010;2011;2012;2013;2014;2015;2016),countryLocale=ar,type=0&group=type,year&calc=v_value*3.75,v_value_per_weight*3.75&cast=v_value|integer,v_weight|integer,v_value_per_weight|float&&mod=importexport(commodityName)',
    barChart: 'http://a2id.02.xspreview.pl/api/data/import.json?v_value=value|sum&v_weight=weight|sum&v_value_per_weight=(value|sum)/(weight|sum)&v_countryId=countryCode&v_commodityCode=commodityCode&v_commodityName=commodityName&v_country=countryName&where=year=2016,countryLocale=ar,commodityLocale=ar,countryName%3C%3EWorld,countryName%3C%3Ear-World,commodityCode=(200911;200912;200919;200921;200929;200931;200939;200941;200949;200961;200969;200971;200979;200981;200989;200990;200950;200980),type=0&group=commodityName,countryName&calc=v_value*3.75,v_value_per_weight*3.75&cast=v_value_per_weight|float'
  },
  commodities: [200911, 200912, 200919, 200921, 200929, 200931, 200939, 200941, 200949, 200961, 200969, 200971, 200979, 200981, 200989, 200990, 200950, 200980],
  commodityGroups: {
    orangeJuice: [200911, 200912, 200919],
    grapefruitJuice: [200921, 200929],
    citrusJuice: [200931, 200939],
    pineappleJuice: [200941, 200949],
    grapeJuice: [200961, 200969],
    appleJuice: [200971, 200979],
    otherJuices: [200989, 200980, 200981, 200950],
    mixedJuices: [200990]
  }
};

/*

عصير البرتقال | Orange juice:	200911, 200912, 200919
عصير الليمون الهندي | Grapefruit juice:	200921, 200929
عصائر الحمضيات بأنواعها (باستثناء البرتقال والليمون الهندي) | Citrus fruit juice (excluding orange or grapefruit):	200931, 200939
عصير الأناناس | Pineapple juice:	200941, 200949
عصير العنب | Grape juice:	200961, 200969
عصير التفاح | Apple juice:	200971, 200979
العصائر الأخرى المكونة من نوع واحد من الفواكه أو الخضروات | Other juices of a single fruit or vegetable:	200989, 200980, 200981, 200950
العصائر المكونة من مزيج من الفواكه أو الخضروات | Juices of mixtures of fruits or vegetables:	200990

*/