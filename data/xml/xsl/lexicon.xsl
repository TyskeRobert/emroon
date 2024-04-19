<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="3.0" 
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    xmlns:l="http://www.emroon.no/ns/lexicon">
    <xsl:output encoding="UTF-8" method="text"/>
    <xsl:strip-space elements="*"/>
    <xsl:template match="/">
        <xsl:text>[</xsl:text>
        <xsl:text>&#x0a; {</xsl:text>
        <xsl:text>&#x0a;  "id": "L0",</xsl:text>
        <xsl:text>&#x0a;  "entry": "?",</xsl:text>
        <xsl:text>&#x0a;  "pos": "ua",</xsl:text>
        <xsl:text>&#x0a;  "linkONP": "",</xsl:text>
        <xsl:text>&#x0a;  "forms": [</xsl:text>
        <xsl:text>&#x0a;   {</xsl:text>
        <xsl:text>&#x0a;    "id": "F0",</xsl:text>
        <xsl:text>&#x0a;    "norm": "?",</xsl:text>
        <xsl:text>&#x0a;    "morph": "---------"</xsl:text>
        <xsl:text>&#x0a;   }</xsl:text>
        <xsl:text>&#x0a;  ]</xsl:text>
        <xsl:text>&#x0a; },</xsl:text>
        <xsl:apply-templates/>
        <xsl:text>&#x0a;]</xsl:text>
    </xsl:template>
    <xsl:template match="l:lemma">
        <xsl:text>&#x0a; {</xsl:text>
        <xsl:text>&#x0a;  "id": "</xsl:text>
        <xsl:value-of select="@id"/>
        <xsl:text>",</xsl:text>
        <xsl:text>&#x0a;  "entry": "</xsl:text>
        <xsl:value-of select="@entry"/>
        <xsl:text>",</xsl:text>
        <xsl:text>&#x0a;  "pos": "</xsl:text>
        <xsl:value-of select="@pos"/>
        <xsl:text>",</xsl:text>
        <xsl:text>&#x0a;  "linkONP": "</xsl:text>
        <xsl:value-of select="@onp-id"/>
        <xsl:text>",</xsl:text>
        <xsl:text>&#x0a;  "forms": [</xsl:text>
        <xsl:text>&#x0a;   {</xsl:text>
        <xsl:text>&#x0a;    "id": "F0",</xsl:text>
        <xsl:text>&#x0a;    "norm": "?",</xsl:text>
        <xsl:text>&#x0a;    "morph": "---------"</xsl:text>
        <xsl:text>&#x0a;   },</xsl:text>
        <xsl:apply-templates/>
        <xsl:text>&#x0a;  ]</xsl:text>
        <xsl:text>&#x0a; }</xsl:text>
        <xsl:if test="following-sibling::l:lemma">
            <xsl:text>,</xsl:text>
        </xsl:if>
    </xsl:template>
    <xsl:template match="l:form">
        <xsl:text>&#x0a;   {</xsl:text>
        <xsl:text>&#x0a;    "id": "</xsl:text>
        <xsl:value-of select="@id"/>
        <xsl:text>",</xsl:text>
        <xsl:text>&#x0a;    "norm": "</xsl:text>
        <xsl:value-of select="@norm"/>
        <xsl:text>",</xsl:text>
        <xsl:text>&#x0a;    "morph": "</xsl:text>
        <xsl:value-of select="@morph"/>
        <xsl:text>"</xsl:text>
        <xsl:text>&#x0a;   }</xsl:text>
        <xsl:if test="following-sibling::l:form">
            <xsl:text>,</xsl:text>
        </xsl:if>
    </xsl:template>
</xsl:stylesheet>