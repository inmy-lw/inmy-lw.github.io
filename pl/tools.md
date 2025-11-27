---
layout: post
category: tips
title:  "Narzędzia"
lang: pl
ref: tips
date:   2025-11-08 00:00:00 +0100
---

# Obliczanie czasów

## Znaleźć swój boost profilu dla budynków

Można znaleźć dostępny boost dla swojego profilu z menu w Kwaterze Głównej.

{% include image.html url="/assets/img/tips/buff_profils.webp" description="Podsumowanie różnych boostów profilu" %}

## Znaleźć swój boost profilu dla badań

Obliczony boost dla badań znajduje się bezpośrednio w centrum badań

{% include image.html url="/assets/img/tips/boost_centre_tech.webp" description="Znaleźć boost badań w zależności od poziomu centrum badań" %}

## Znaleźć czas bazowy budowy (budynek lub technologia)

Aby obliczać czasy końcowe, trzeba znać bazowy czas budowy:

{% include image.html url="/assets/img/tips/temps_origine.webp" description="Czas bazowy budowy (budynek lub technologia)" %}

## Oszacować czas budowy budynków

<form action="javascript:void(0)" name="form" id="calcForm">
</form>
<table>
    <thead>
        <tr>
            <th>Rodzaj</th>
            <th>Czas bazowy (dni:godziny:minuty:sekundy)</th>
            <th>Boost profilu (%)</th>
            <th>Sekretariat</th>
            <th>Szacowany czas końcowy</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>
                <select id="type" name="type" class="calcFormInput">
                    <option value="bat">Budynek</option>
                    <option value="tech">Technologia</option>
                </select>
            </td>
            <td>
                <input type="text" id="origine" name="origine" class="calcFormInput" value="11:04:17:09">
            </td>
            <td>
                <input type="text" id="boost" name="boost" class="calcFormInput" value="78,50">
            </td>
            <td>
                <select id="secretariat" name="secretariat" class="calcFormInput">
                    <option value="">Brak</option>
                    <option value="science">Nauka</option>
                    <option value="dev">Rozwój</option>
                </select>
            </td>
            <td>
                <span id="result"></span>
            </td>
        </tr>
    </tbody>
</table>
