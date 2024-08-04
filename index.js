const youtubeID = {
    'arvnl18':'M6BXAlPJwM8','jpvnl18':'W-3wEr_emP4',"plvnl18":"TFYqfifFmCk","kroqt16":"DpP9qNc5Qks","jpwgp17":"IwBXuOI0U1o","ruWC18_en":"cuF1G5-ur1c","usWC18_full":"7vtytDEt04A",
    "russia":"eCxNoF-GWjA","us18":"7vtytDEt04A","jpavc23":"BveD70tcbvw","kr18":"wCFh3ScLyFo","us22_full":"ymO5tIxUqAg","brvnl22_full":"Iy8HmOAQQVs","trvnl22_full":"oqTs2sZ-fN0",
    "crowc22":"wkO-MdwRieY","domwc22":"Hf1BEaenOCc","korwc22":"4R6kwZ96qRM","turwc22":"PCx9ca6ZN5M","usawc22":"5eFgL1iCF4U","chvnl2022":"94Z5fk4ucc0",
    "chnvnl22":"XE46XPAwSAI","belvnl22":"RE1TOkZ8TuQ","bgvnl22":"92EvAZIiThI","rsvnl22":"wHuxT6egOT8","polvnl22":"gdgBSKlmLYo",
    "usavnl22":"LRZLQZYq9Ow","canvnl22":"jfbQDR1tMXM","brvnl22":"fycJYnCtUmE","krvnl22":"FeC09MzV7_o","domvnl22":"Q09VwYoaJCg","jpvnl2022":"4ZxkdZqRFD0",
    "turvnl22":"JVk0kJf3YJY","itavnl23":"g_8_h-Fpfeo","canvnl23":"X83GsHhs1zo","korvnl23":"GvhdVW1PJCU","srbvnl23":"GjGjNaeebeE","turWc2022":"cLOb_GS_nJ0","trWC2022":"ugtM1xxCXzs",
    "coloqt23":"ead1CmyRPGM","ploqt23":"kwFmHYiWI-k","sioqt23":"uDpZBdHpKm4","kroqt23":"dMAaq-DXW_k","bgvnl24":"RCdADH7jK-8","krvnl2022":"jlMRtJTN-4A",
    "brvnl24":"fPUJfwYIBQc","DOMWC2022":"MXc5tQ88mk0","CHNVNL2022":"uf2nnP0CmZQ","ITAVNL2023":"MDZFt2HJL4M","rsvnl2022":"MhV1TbHrqC8","belvnl2022":"3pRrze0zui0"
}

function show(text){
    document.getElementById('myIframe').src = "https://www.youtube.com/embed/"+youtubeID[text];
}
