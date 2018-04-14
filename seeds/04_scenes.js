
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('scenes').del()
    .then(function () {
      // Inserts seed entries
      return knex('scenes').insert([
        { name: '1.prologue', play_id: 1 },
        { name: '1.1', play_id: 1 },
        { name: '1.2', play_id: 1 },
        { name: '1.3', play_id: 1 },
        { name: '1.4', play_id: 1 },
        { name: '1.5', play_id: 1 },
        { name: '2.prologue', play_id: 1 },
        { name: '2.1', play_id: 1 },
        { name: '2.2', play_id: 1 },
        { name: '2.3', play_id: 1 },
        { name: '2.4', play_id: 1 },
        { name: '2.5', play_id: 1 },
        { name: '2.6', play_id: 1 },
        { name: '3.1', play_id: 1 },
        { name: '3.2', play_id: 1 },
        { name: '3.3', play_id: 1 },
        { name: '3.4', play_id: 1 },
        { name: '3.5', play_id: 1 },
        { name: '4.1', play_id: 1 },
        { name: '4.2', play_id: 1 },
        { name: '4.3', play_id: 1 },
        { name: '4.4', play_id: 1 },
        { name: '4.5', play_id: 1 },
        { name: '5.1', play_id: 1 },
        { name: '5.2', play_id: 1 },
        { name: '5.3', play_id: 1 },
      ]);
    });
};
