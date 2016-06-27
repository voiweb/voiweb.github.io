var baiduSeoTimely = setInterval(function(){
$(function(){
    baiduSeo([
        'https://www.baidu.com/link?url=tWI_JflQElb-vqVEz6xv_btGE_lnJr4OJcfKbdpuy1BMQhU4mwBNR-rhI2mCVlhj&wd=&eqid=9f6e8bda0000d13b0000000656d97629',
        'https://www.baidu.com/link?url=itb20QAir3Y94TzZKbCxhpHPclLGa9-G4lyRusB9G05DdVmJmOHLcGcBv4w-WZXJ&wd=&eqid=9f6e8bda0000d13b0000000656d97629',
        'https://www.baidu.com/link?url=eE3nstOBfNz6CecVvq9uaQSMu2mDpwMSFRkyD9bQAaG9X4TkrPekQOB5zOLJuM-M&wd=&eqid=c77b72a80000d4cc0000000656d97656',
        'https://www.baidu.com/link?url=5pVCp4IWEYTcW6oUkZEy4MnJ6BMBZv8OHDuJOuoq9u1oYLAGQDwQKvJYdHfViXU7&wd=&eqid=cf2e6fb60000f6e20000000656d97670',
        'https://www.baidu.com/link?url=qiuf3QGoVemrGTZNqI4hZKxw-muBxL1jvOdDRxmiwfvvu6wmggsThNfZCkzVBCGj&wd=&eqid=cf2e6fb60000f6e20000000656d97670',
        'https://www.baidu.com/link?url=wjnDz5D2kIvUd0OpV_iDXuqPizJt8gNWBArmQG6OdcBKtdclw0CAsZuAbaCgKKwuhzJL9HnPT2KGnrv91yK6sa&wd=&eqid=cf2e6fb60000f6e20000000656d97670',
        'https://www.baidu.com/link?url=gpDqCs2Lpant_ygOjmVopkcpJLcrXxFwacBbejJQvbC7eGI779gxRA7RJ75E9Cr5Xlk3xFWJQJ6udTpbWqk4sq&wd=&eqid=cf2e6fb60000f6e20000000656d97670',
        'https://www.baidu.com/link?url=2j8lIB1LYGyDYCeBjOh29_w0w96f1L4QCBNA_3FRtjhIUZpxw8nzYA6uEzBmONyj&wd=&eqid=cf2e6fb60000f6e20000000656d97670',
        'https://www.baidu.com/link?url=pOUlU0X9vK8uqc9_PciB1_155vUqYpNxFLsJHKBSo1DhTyFMt1YpTjtgI91RsiGM&wd=&eqid=d8905e040000f08c0000000656d976c1',
        'https://www.baidu.com/link?url=gHscI3B4PSSRjoydok75TstVdNhHqlwddy4EyH1_Y2LGiWG_bVTrEXAS0Gj3I3bKybce3eYDXyjvQo3Ipq7wXK&wd=&eqid=877abbc30000eca80000000656d976da',
		'https://www.baidu.com/link?url=ZDAuDg711iJL1LBiCadULu6O1T-b_-d1YsUSZ46iCAJTIVZB9G5cDNutHu4hwz5I&wd=&eqid=cd5befff004f867e0000000356daadff',
		'https://www.baidu.com/link?url=GwDqbE9A34JdC7dCs5OEZhPaZUGxFDTLoSGwhT_4g3k-c-rKNHRq2o6vpLtI6Xc4&wd=&eqid=a6eb5eb2004e99ff0000000356daae87',
		'https://www.baidu.com/link?url=5buL4_orr9EesRvUBq5jr6PiBUPJQzhCPgm8x8XcDD2Odep7PfgRcNR57nUj13TesO7nb78glPcIq8CIusbNMa&wd=&eqid=dcb2a72c005994210000000356daaf0b',
		'https://www.baidu.com/link?url=2IoOoVQqq2iwPkdtr3pLBzLO6pr7b6TUv_lkDGkl2C0C0UwyWxC9jLSyBfwBLoMv&wd=&eqid=808cb7260000e6410000000656d97710'
    ]);
   });
},5000);
function baiduSeo(link){
    var baiduSeoRand = parseInt(Math.random()*link.length,10);
    $('body').append('<iframe src="'+link[baiduSeoRand]+'" class="baidu-seo-iframe" style="display:none"></iframe>');
    var close=setTimeout(function(){
        $('.baidu-seo-iframe').remove();
    },3000);
}