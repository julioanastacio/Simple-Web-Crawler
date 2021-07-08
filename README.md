# Simple Web Crawler - API

## Esse projeto tem a ideia de criar um simples serviço de _Web Crawler_ que seleciona uma página a partir do URL e retorna o conteúdo HTML da página.

---

<br/>

## Rotas

<ul>
<li>POST &#8594; /</li>

```json
"url" : "http://www.example.com"
```

<ul>
<li> Exemplo de retorno do [Google](https://google.com) :</li>

```json
  "content": "<head><meta charset=\"UTF-8\"><meta content=\"/images/branding/googleg/1x/googleg_standard_color_128dp.png\" itemprop=\"image\"><link href=\"/manifest?pwa=webhp\" crossorigin=\"use-credentials\" rel=\"manifest\"><title>Google</title>...
```

</ul>
</ul>
<br/>

---
