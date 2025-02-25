const color = {
    HexToRgb: function(hex) {
        hex = hex.replace(/^#/, '');
        if (hex.length === 3) {
            hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
        }
        const bigint = parseInt(hex, 16);
        const r = (bigint >> 16) & 255;
        const g = (bigint >> 8) & 255;
        const b = bigint & 255;
        return [r, g, b];
    },
    RgbToHex: function(r, g, b) {
        return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    },
    getDarkColor: function(hex, percent) {
        const [r, g, b] = this.HexToRgb(hex);
        const newR = Math.round(r * (1 - percent));
        const newG = Math.round(g * (1 - percent));
        const newB = Math.round(b * (1 - percent));
        return this.RgbToHex(newR, newG, newB);
    },
    getLightColor: function(hex, percent) {
        const [r, g, b] = this.HexToRgb(hex);
        const newR = Math.min(255, Math.round(r * (1 + percent)));
        const newG = Math.min(255, Math.round(g * (1 + percent)));
        const newB = Math.min(255, Math.round(b * (1 + percent)));
        return this.RgbToHex(newR, newG, newB);
    },
    colorNameToHex: function(color) {
        const colors = {
            "red": "#FF0000",
            "blue": "#0000FF",
            "green": "#00FF00",
            "yellow": "#FFFF00",
            "purple": "#800080",
            "gray": "808080",
            "pink": "FFC0CB",
            "brown": "#A52A2A",
            "orange": "#FFA500",
            "violet": "#EE82EE"
        };
        return colors[color.toLowerCase()] || null;
    }
};

export default color;


