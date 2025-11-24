---
layout: post
category: tips
title:  "Werkzeuge"
lang: de
ref: tips
date:   2025-11-08 00:00:00 +0100
---

# Dauern berechnen

## Eigenen Profil-Boost für Gebäude finden

Den für dein Profil verfügbaren Boost findest du über ein Menü im HQ.

{% include image.html url="/assets/img/tips/buff_profils.webp" description="Übersicht der verschiedenen Profil‑Boosts" %}

## Eigenen Profil-Boost für Tech‑Forschung finden

Der berechnete Boost für die Tech‑Forschung steht direkt am Tech‑Zentrum.

{% include image.html url="/assets/img/tips/boost_centre_tech.webp" description="Forschungs‑Boost abhängig vom Tech‑Zentrum finden" %}

## Ursprungszeit deiner Konstruktion (Gebäude oder Tech) finden

Um die Endzeiten zu berechnen, musst du die ursprüngliche Bauzeit kennen:

{% include image.html url="/assets/img/tips/temps_origine.webp" description="Ursprungszeit einer Konstruktion (Gebäude oder Tech)" %}

## Bauzeit von Gebäuden abschätzen

<form action="javascript:void(0)" name="form" id="calcForm">
</form>
<table>
    <thead>
        <tr>
            <th>Art</th>
            <th>Ursprungszeit (Tage:Stunden:Minuten:Sekunden)</th>
            <th>Profil‑Boost (%)</th>
            <th>Sekretariat</th>
            <th>Schätzung Endzeit</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>
                <select id="type" name="type" class="calcFormInput">
                    <option value="bat">Gebäude</option>
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
                    <option value="">Keins</option>
                    <option value="science">Wissenschaft</option>
                    <option value="dev">Entwicklung</option>
                </select>
            </td>
            <td>
                <span id="result"></span>
            </td>
        </tr>
    </tbody>
</table>
