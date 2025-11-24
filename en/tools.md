---
layout: post
category: tips
title:  "Tools"
lang: en
ref: tips
date:   2025-11-08 00:00:00 +0100
---

# Time calculations

## Find your profile boost for buildings

You can find the available boosts for your profile from an HQ menu.

{% include image.html url="/assets/img/tips/buff_profils.webp" description="Summary of the different profile boosts" %}

## Find your profile boost for tech research

The calculated boost for tech research can be found directly on the Tech Center.

{% include image.html url="/assets/img/tips/boost_centre_tech.webp" description="Find the research boost based on the Tech Center" %}

## Find the original build time (building or tech)

To calculate the final times, you need to identify the original construction time:

{% include image.html url="/assets/img/tips/temps_origine.webp" description="Original construction time (building or tech)" %}

## Estimate building construction time

<form action="javascript:void(0)" name="form" id="calcForm">
</form>
<table>
    <thead>
        <tr>
            <th>Type</th>
            <th>Original time (days:hours:minutes:seconds)</th>
            <th>Profile boost (%)</th>
            <th>Secretary</th>
            <th>Estimated final time</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>
                <select id="type" name="type" class="calcFormInput">
                    <option value="bat">Building</option>
                    <option value="tech">Tech</option>
                </select>
            </td>
            <td>
                <input type="text" id="origine" name="origine" class="calcFormInput" value="11:04:17:09">
            </td>
            <td>
                <input type="text" id="boost" name="boost" class="calcFormInput" value="78.50">
            </td>
            <td>
                <select id="secretariat" name="secretariat" class="calcFormInput">
                    <option value="">None</option>
                    <option value="science">Science</option>
                    <option value="dev">Development</option>
                </select>
            </td>
            <td>
                <span id="result"></span>
            </td>
        </tr>
    </tbody>
</table>
