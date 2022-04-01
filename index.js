hexo.extend.tag.register('showcasetables', function (args, content) {
    let card_image = ""
    let image_size = "80px"
    let font_icon_color = "555"
    let font_color = "009bf5"
    let font_weight = 500
    let github_avatar = true
    let board_width = "260px"
    let margin_rule = "auto"
    if(!(hexo.config.hexo_showcase_card === undefined))
    {
        if(!(hexo.config.hexo_showcase_card.card_image === null))
          card_image = hexo.config.hexo_showcase_card.card_image;
        if(!(hexo.config.hexo_showcase_card.image_size === null))
            image_size = hexo.config.hexo_showcase_card.image_size;
        if(!(hexo.config.hexo_showcase_card.font_icon_color === null))
            font_icon_color = hexo.config.hexo_showcase_card.font_icon_color;
        if(!(hexo.config.hexo_showcase_card.font_color === null))
            font_color = hexo.config.hexo_showcase_card.font_color;
        if(!(hexo.config.hexo_showcase_card.font_weight === null))
            font_weight = hexo.config.hexo_showcase_card.font_weight;
        if(!(hexo.config.hexo_showcase_card.board_width === null))
            board_width = hexo.config.hexo_showcase_card.board_width;
        if(!(hexo.config.hexo_showcase_card.margin_rule === null))
            margin_rule = hexo.config.hexo_showcase_card.margin_rule;
    }
    let iframes = `<div class="showcasecard-box" style="overflow-y:auto;">\n`
    iframes += `<table style="width:auto;margin:${margin_rule};margin-bottom:5px;margin-top:5px;">\n<tr>\n`;

    content.split("\n").map((author_arg,i)=>{
        if(author_arg === "")
            return;
        const argsObj = {}
        let author_args = author_arg.split(',');
        // console.log(author_args)
        author_args.forEach((arg)=>{
            let currentTag = arg.split(':');
            let TagName = currentTag[0]
            let TagValue = "";
            for(var index=1;index<currentTag.length;index++)
            {
                if(!(TagValue === ""))
                TagValue+=":";
                TagValue += currentTag[index];
            }
            argsObj[TagName] = TagValue;
            // console.log(TagName);
            // console.log(TagValue);
        });
        var cardName = argsObj.card_name === undefined ? "" : argsObj.card_name;
        var cardLink = argsObj.addr === undefined ? "" : argsObj.addr;
        var cardImage = ""
        if(!(argsObj.card_image == null || argsObj.card_image === ""))
        {
            cardImage = argsObj.card_image;
        }
        
        iframes += `<td align="center" style="text-align:center;border: 1px solid #c1cfdc;color: #${font_color};font-weight: ${font_weight};width: ${board_width}; padding: 10px 10px;white-space:nowrap;">`;
        iframes += `<a href="${cardLink}"><img src="${cardImage}" width="${image_size};" alt="" style="display: block;margin: 0 auto;padding: 2px;max-width: 96px;height: auto;border: 2px solid #333;border-radius: ${image_size};"/></a>`;
        iframes += `<sub text-align="center" style="font-size: 15px;">${cardName}</sub></a><br/>`;
        iframes += `</a></td>\n`;

    });
    iframes +=`</table>\n</tr>\n</div>\n`;
    return iframes;
}, { ends: true });