module.exports = {
  async beforeCreate(event) {
    const { data } = event.params;

    const prefix = "XYZ2025";

    // Get initials from fullName safely
    const name = data.fullName || "";
    const initials = name
      .split(" ")
      .map((n) => n[0]?.toUpperCase())
      .join("");

    const randomPart = Math.floor(10000 + Math.random() * 90000);

    const offerLetterId = `${prefix}-${initials}-${randomPart}`;

    data.offerLetterId = offerLetterId;
  }
};
