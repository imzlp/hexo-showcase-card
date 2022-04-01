### USAGE

站点`_config.yml`配置：

```yml
hexo_showcase_card:
  margin_rule: unset
  board_width: 300px
  image_width: 300px
  image_hight: 185px
  font_icon_color: 555
  font_color: 009bf5
  font_weight: 500

```

使用方法：

```config
{% showcasetables %}
card_name:集成UE到原生Xcode iOS工程,addr:https://imzlp.com/showcase/#%E9%9B%86%E6%88%90UE%E8%87%B3%E5%8E%9F%E7%94%9FXcode-iOS%E9%A1%B9%E7%9B%AE,card_image:https://img.imzlp.com/imgs/zlp/picgo/2021/20220401131926.png
card_name:UE中人体姿态追踪,addr:https://imzlp.com/showcase/#UE%E4%B8%AD%E4%BA%BA%E4%BD%93%E5%A7%BF%E6%80%81%E8%BF%BD%E8%B8%AA,card_image:https://img.imzlp.com/imgs/zlp/picgo/2021/20220401115245.png
card_name:多进程Cook的性能数据,addr:https://imzlp.com/showcase/#%E5%A4%9A%E8%BF%9B%E7%A8%8BCook%E7%9A%84%E6%80%A7%E8%83%BD%E6%95%B0%E6%8D%AE,card_image:https://img.imzlp.com/imgs/zlp/picgo/2021/20220401130851.png
{% endshowcasetables %}
```
