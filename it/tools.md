---
layout: post
category: tips
title:  "Strumenti"
lang: it
ref: tips
date:   2025-11-08 00:00:00 +0100
---

# Calcolo delle durate

## Trovare il proprio boost profilo per gli edifici

È possibile trovare il boost disponibile per il proprio profilo da un menu del QG.

{% include image.html url="/assets/img/tips/buff_profils.webp" description="Riepilogo dei diversi boost per il proprio profilo" %}

## Trovare il proprio boost profilo per la ricerca tech

Il boost calcolato per la ricerca tech si trova direttamente sul centro tech

{% include image.html url="/assets/img/tips/boost_centre_tech.webp" description="Trovare il boost di ricerca in funzione del centro tech" %}

## Trovare il tempo originale della propria costruzione (edificio o tech)

Per calcolare i tempi finali, bisogna individuare il tempo di costruzione originale:

{% include image.html url="/assets/img/tips/temps_origine.webp" description="Tempo originale di una costruzione (edificio o tech)" %}

## Stimare il tempo di costruzione degli edifici

<form action="javascript:void(0)" name="form" id="calcForm">
</form>
<table>
    <thead>
        <tr>
            <th>Tipo di ricerca</th>
            <th>Tempo originale (giorni:ore:minuti:secondi)</th>
            <th>Boost profilo (%)</th>
            <th>Segreteria</th>
            <th>Stima tempo finale</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>
                <select id="type" name="type" class="calcFormInput">
                    <option value="bat">Edificio</option>
                    <option value="tech">Tech</option>
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
                    <option value="">Nessuno</option>
                    <option value="science">Scienza</option>
                    <option value="dev">Sviluppo</option>
                </select>
            </td>
            <td>
                <span id="result"></span>
            </td>
        </tr>
    </tbody>
</table>
