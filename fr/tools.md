---
layout: post
category: tips
title:  "Outils"
lang: fr
ref: tips
date:   2025-11-08 00:00:00 +0100
---

# Calcul des durées

## Trouver son boost de profil pour les bâtiments

Il est possible de trouver le boost disponible pour son profil depuis un menu du QG.

{% include image.html url="/assets/img/tips/buff_profils.webp" description="Récapitulatif des différents boosts pour son profil" %}

## Trouver son boost de profil pour la recherche tech

Le boost calculé pour la recherche tech se trouve directement sur le centre tech

{% include image.html url="/assets/img/tips/boost_centre_tech.webp" description="Trouver le boost de recherche en fonction du centre tech" %}

## Trouver le temps d'origine de sa construction (bâtiment ou tech)

Pour calculer les temps finaux, il faut pouvoir repérer le temps de construction original :

{% include image.html url="/assets/img/tips/temps_origine.webp" description="Temps d'origine d'une construction (bâtiment ou tech)" %}

## Estimer le temps de construction de bâtiments

<form action="javascript:void(0)" name="form" id="calcForm">
</form>
<table>
    <thead>
        <tr>
            <th>Type de recherche</th>
            <th>Temps d'origine (jours:heures:minutes:secondes)</th>
            <th>Boost profil (%)</th>
            <th>Secrétariat</th>
            <th>Estimation temps final</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>
                <select id="type" name="type" class="calcFormInput">
                    <option value="bat">Bâtiment</option>
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
                    <option value="">Aucun</option>
                    <option value="science">Science</option>
                    <option value="dev">Développement</option>
                </select>
            </td>
            <td>
                <span id="result"></span>
            </td>
        </tr>
    </tbody>
</table>
