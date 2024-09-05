const videoID = ['Iy8HmOAQQVs','oqTs2sZ-fN0','ymO5tIxUqAg',
    'k1cLYX7vQUeAq2Bohym','1005053180','k21bXdHi0IcyA0Bohys',
    'BveD70tcbvw',
    'B-KAxMjLAoo','k7eD97Vs5XIdJRBohU4',
    'k5ig3amq3N9uKUBnSPG','k7lMVXISoDpxCTBnSPM','k1TYjff43offNMBnSPI','k7eqy67Di1MkGYBnSPK',
    'k3eFbpdOZ0gIzcBnTcU','k7D9LtNtZzpmz0BnTcW','k5sLKLKuSg4sm2Bohyk',
    'k1HvwGmLnMMzWOBohyo','k3vsOdvhndcHyYBohyy',
    'q0vP9USXMS8',
    'k6vTADP42oEgNYBohyu',];

const youtubeSet = new Set([0,1,2,,6,7,18]);
const vimeo = new Set([4]);

var videoUrl = videoID.map((ele,idx)=>{
    if(vimeo.has(Number(idx))){
        return  `https://player.vimeo.com/video/${ele}?badge=0&autopause=0&player_id=0&app_id=58479`;
    }else{
        return youtubeSet.has(Number(idx)) ? `https://www.youtube.com/embed/${ele}` : `https://www.dailymotion.com/embed/video/${ele}`;

    }
          
})
