export interface Hexagram {
  id: number;
  name: string;
  chineseName: string;
  symbol: string;
  lines: boolean[]; // true = yang (solid), false = yin (broken)
  keywords: string[];
  meaning: string;
  interpretation: string;
  advice: string;
  relationships: string;
  career: string;
  health: string;
  changingLines: { [key: number]: string };
}

export const hexagrams: Hexagram[] = [
  {
    id: 1,
    name: "Quẻ Càn",
    chineseName: "乾 (Qián)",
    symbol: "☰",
    lines: [true, true, true, true, true, true],
    keywords: ["sáng tạo", "thiên đường", "sức mạnh", "lãnh đạo"],
    meaning: "Năng lượng dương thuần khiết, sức mạnh sáng tạo của vũ trụ. Đại diện cho thiên đường, lãnh đạo và quyền năng thiêng liêng.",
    interpretation: "Quẻ Càn đại diện cho sức mạnh sáng tạo nguyên thủy. Đây là khởi đầu của mọi thứ, nguồn năng lượng và cảm hứng. Quẻ này báo hiệu thời điểm có tiềm năng lớn và sức mạnh sáng tạo.",
    advice: "Hãy tin tưởng vào khả năng sáng tạo và phẩm chất lãnh đạo của bạn. Chủ động và hành động với sự tự tin. Đây là thời điểm thích hợp cho những khởi đầu mới và hành động táo bạo.",
    relationships: "Trong các mối quan hệ, quẻ này gợi ý việc dẫn dắt và trở thành động lực thúc đẩy. Thể hiện sức mạnh và sự đáng tin cậy với đối tác của bạn.",
    career: "Thời điểm tuyệt vời cho vai trò lãnh đạo và các dự án sáng tạo. Uy quyền tự nhiên và tầm nhìn của bạn sẽ dẫn dắt bạn đến thành công.",
    health: "Năng lượng sống mạnh mẽ và sức khỏe tốt. Duy trì sức mạnh thông qua nghỉ ngơi và dinh dưỡng hợp lý.",
    changingLines: {
      1: "Rồng ẩn. Chưa nên hành động. Tích lũy sức mạnh để chuẩn bị.",
      2: "Rồng xuất hiện trên cánh đồng. Tìm kiếm sự hướng dẫn từ những người thầy khôn ngoan.",
      3: "Hoạt động suốt cả ngày. Hãy cẩn thận với lòng kiêu hãnh và quá tự tin.",
      4: "Nhảy qua vực thẳm. Chấp nhận rủi ro có tính toán với trí tuệ.",
      5: "Rồng bay trên trời. Khả năng lãnh đạo của bạn đạt đến đỉnh cao.",
      6: "Rồng kiêu ngạo sẽ hối hận. Tránh lòng kiêu hãnh quá mức."
    }
  },
  {
    id: 2,
    name: "Quẻ Khôn",
    chineseName: "坤 (Kūn)",
    symbol: "☷",
    lines: [false, false, false, false, false, false],
    keywords: ["tiếp nhận", "đất", "nuôi dưỡng", "tận tụy"],
    meaning: "Năng lượng âm thuần khiết, sức mạnh tiếp nhận của đất. Đại diện cho sự nuôi dưỡng, tận tụy và sức mạnh hỗ trợ.",
    interpretation: "Quẻ Khôn đại diện cho sức mạnh bổ sung cho Quẻ Càn. Đây là về việc tiếp nhận, nuôi dưỡng và hỗ trợ. Quẻ này báo hiệu thời điểm cần kiên nhẫn và chăm sóc cẩn thận.",
    advice: "Thực hành kiên nhẫn và khả năng tiếp nhận. Hỗ trợ người khác và để các tình huống phát triển tự nhiên. Sức mạnh của bạn nằm ở khả năng thích ứng và nuôi dưỡng.",
    relationships: "Tập trung vào việc hỗ trợ và nuôi dưỡng đối tác của bạn. Tạo nền tảng vững chắc để tình yêu phát triển.",
    career: "Thành công đến thông qua hợp tác và hỗ trợ người khác. Tránh ép buộc các tình huống và thay vào đó làm việc theo dòng chảy tự nhiên.",
    health: "Tập trung vào nghỉ ngơi, dinh dưỡng và các phương pháp chữa lành nhẹ nhàng. Lắng nghe nhu cầu của cơ thể bạn.",
    changingLines: {
      1: "Sương giá dưới chân. Mùa đông đang đến. Chuẩn bị cho những thách thức phía trước.",
      2: "Thẳng, vuông, lớn. Lòng tốt tự nhiên không cần nỗ lực.",
      3: "Sự xuất sắc ẩn giấu. Duy trì đức hạnh của bạn trong riêng tư.",
      4: "Túi buộc chặt. Sự thận trọng ngăn ngừa sai lầm.",
      5: "Áo vàng dưới. Sự khiêm tốn mang lại vận may tối thượng.",
      6: "Rồng chiến đấu trong hoang dã. Tránh đối đầu giữa các thái cực."
    }
  },
  {
    id: 3,
    name: "Khó Khăn Ban Đầu",
    chineseName: "屯 (Zhūn)",
    symbol: "☵",
    lines: [true, false, false, false, true, false],
    keywords: ["khó khăn", "kiên trì", "tăng trưởng", "kiên nhẫn"],
    meaning: "Những khó khăn ban đầu đòi hỏi kiên nhẫn và kiên trì. Như một cây cối đang vật lộn để vượt qua đất.",
    interpretation: "Quẻ này đại diện cho những khó khăn tự nhiên phát sinh ở đầu bất kỳ nỗ lực nào. Như cơn đau đẻ, những thách thức này là cần thiết cho sự tăng trưởng và phát triển.",
    advice: "Hãy kiên nhẫn và kiên trì. Tìm kiếm sự giúp đỡ từ người khác khi cần thiết. Tập trung vào việc xây dựng nền tảng vững chắc thay vì vội vàng hướng tới mục tiêu.",
    relationships: "Các mối quan hệ mới có thể gặp phải những thách thức ban đầu. Vượt qua khó khăn với kiên nhẫn và sự hiểu biết.",
    career: "Các dự án mới hoặc thay đổi nghề nghiệp có thể gặp trở ngại. Giữ vững cam kết với tầm nhìn của bạn và làm việc đều đặn hướng tới mục tiêu.",
    health: "Phục hồi sau bệnh tật hoặc thiết lập thói quen sức khỏe mới đòi hỏi kiên nhẫn và nhất quán.",
    changingLines: {
      1: "Do dự và cản trở. Tìm kiếm sự hỗ trợ từ người khác.",
      2: "Chướng ngại chồng chất. Sự kiên trì cuối cùng sẽ vượt qua chúng.",
      3: "Theo đuổi mà không có hướng dẫn dẫn đến sự nhục nhã. Tìm kiếm lời khuyên khôn ngoan.",
      4: "Vươn tay tìm kiếm sự giúp đỡ. Hỗ trợ đến từ những nguồn bất ngờ.",
      5: "Những trở ngại nhỏ đối với lòng tốt của bạn. Tiếp tục với ý định tốt.",
      6: "Ngựa và xe tách rời. Một số mối quan hệ không thể bị ép buộc."
    }
  },
  {
    id: 4,
    name: "Sự Ngu Dốt Của Tuổi Trẻ",
    chineseName: "蒙 (Méng)",
    symbol: "☶",
    lines: [false, true, false, false, false, true],
    keywords: ["học tập", "tuổi trẻ", "thiếu kinh nghiệm", "hướng dẫn"],
    meaning: "Sự thiếu kinh nghiệm của tuổi trẻ tìm kiếm trí tuệ. Đại diện cho quá trình học tập tự nhiên và nhu cầu hướng dẫn.",
    interpretation: "Quẻ này đại diện cho tâm trí của học sinh - háo hức học hỏi nhưng thiếu kinh nghiệm. Nó nhấn mạnh tầm quan trọng của hướng dẫn đúng đắn và sự sẵn sàng học hỏi từ sai lầm.",
    advice: "Tiếp cận các tình huống với sự khiêm tốn và cởi mở để học hỏi. Tìm kiếm hướng dẫn từ những người cố vấn có kinh nghiệm. Kiên nhẫn với quá trình học tập của chính bạn.",
    relationships: "Tiếp cận tình yêu với sự chân thành và cởi mở để học hỏi. Tránh mắc phải những sai lầm tương tự nhiều lần.",
    career: "Đầu tư vào học tập và phát triển kỹ năng. Tìm kiếm sự cố vấn và sẵn sàng bắt đầu từ đầu.",
    health: "Lắng nghe lời khuyên y tế và tìm hiểu về nhu cầu của cơ thể bạn. Tránh tự chẩn đoán và tìm kiếm hướng dẫn chuyên nghiệp.",
    changingLines: {
      1: "Kỷ luật sự ngu dốt. Đặt ra ranh giới và kỳ vọng rõ ràng.",
      2: "Khoan dung với sự ngu dốt bằng lòng tốt. Kiên nhẫn với người mới bắt đầu sẽ được đền đáp.",
      3: "Đừng cưới một thiếu nữ mất bản thân. Tránh các mối quan hệ dựa trên say mê.",
      4: "Bị ràng buộc bởi sự ngu dốt. Ảo tưởng và ảo giác dẫn đến đau khổ.",
      5: "Sự ngu dốt như trẻ con. Sự ngây thơ và đơn giản mang lại vận may.",
      6: "Trừng phạt sự ngu dốt. Đôi khi những bài học khắc nghiệt là cần thiết cho sự tăng trưởng."
    }
  },
  {
    id: 5,
    name: "Chờ Đợi",
    chineseName: "需 (Xū)",
    symbol: "☰",
    lines: [false, true, false, true, true, true],
    keywords: ["kiên nhẫn", "chờ đợi", "nuôi dưỡng", "chuẩn bị"],
    meaning: "Trí tuệ của việc chờ đợi thời điểm thích hợp. Đại diện cho kiên nhẫn, chuẩn bị và tin tưởng vào thời gian thiêng liêng.",
    interpretation: "Quẻ này dạy nghệ thuật chờ đợi kiên nhẫn. Đây không phải là sự thụ động không hành động, mà là chuẩn bị tích cực trong khi tin tưởng vào thời gian tự nhiên của các sự kiện.",
    advice: "Nuôi dưỡng kiên nhẫn và sử dụng thời gian chờ đợi để chuẩn bị. Tin tưởng rằng cơ hội đúng sẽ đến. Duy trì sức mạnh của bạn thông qua dinh dưỡng hợp lý.",
    relationships: "Để các mối quan hệ phát triển tự nhiên. Đừng ép buộc kết quả nhưng hãy sẵn sàng và chuẩn bị.",
    career: "Chuẩn bị bản thân cho các cơ hội trong khi chờ đợi thời điểm thích hợp để hành động. Xây dựng mạng lưới và phát triển kỹ năng là thuận lợi.",
    health: "Tập trung vào việc xây dựng và duy trì sức mạnh của bạn. Chăm sóc phòng ngừa quan trọng hơn điều trị phản ứng.",
    changingLines: {
      1: "Chờ đợi trên đồng cỏ. Giữ sự chuẩn bị ở khoảng cách an toàn.",
      2: "Chờ đợi trên cát. Một số tin đồn phát sinh nhưng kiên nhẫn sẽ thắng thế.",
      3: "Chờ đợi trong bùn. Hành động bất cẩn thu hút khó khăn.",
      4: "Chờ đợi trong máu. Thoát khỏi nguy hiểm thông qua sự chấp nhận.",
      5: "Chờ đợi tại tiệc. Nuôi dưỡng bản thân trong khi chờ đợi.",
      6: "Rơi vào hố. Khách bất ngờ mang đến cơ hội."
    }
  },
  {
    id: 6,
    name: "Xung Đột",
    chineseName: "訟 (Sòng)",
    symbol: "☰",
    lines: [true, true, true, false, true, false],
    keywords: ["xung đột", "đối lập", "thận trọng", "hòa giải"],
    meaning: "Xung đột nội tâm và tranh chấp bên ngoài. Đại diện cho sự căng thẳng giữa các lực đối lập và nhu cầu giải quyết.",
    interpretation: "Quẻ này cảnh báo về các xung đột phát sinh từ lợi ích đối lập hoặc hiểu lầm. Nó khuyên nên thận trọng và tìm kiếm hòa giải thay vì đối đầu trực tiếp.",
    advice: "Tránh các xung đột không cần thiết và tìm kiếm hòa giải khi tranh chấp phát sinh. Tập trung vào việc hiểu các quan điểm khác nhau. Có thể cần phải thỏa hiệp.",
    relationships: "Giải quyết xung đột sớm trước khi chúng leo thang. Tìm cách hiểu quan điểm của đối tác và tìm điểm chung.",
    career: "Xung đột tại nơi làm việc có thể phát sinh. Giữ thái độ chuyên nghiệp và tìm kiếm giải quyết thông qua các kênh thích hợp. Tránh đứng về phe không cần thiết.",
    health: "Căng thẳng từ xung đột có thể ảnh hưởng đến sức khỏe. Thực hành quản lý căng thẳng và tránh các cuộc tranh cãi không cần thiết.",
    changingLines: {
      1: "Đừng theo đuổi xung đột. Để vấn đề qua đi nhanh chóng.",
      2: "Không thể tham gia xung đột. Trở về nhà và tránh đối đầu.",
      3: "Sống dựa trên công lao quá khứ. Dựa vào đức hạnh đã thiết lập để có an ninh.",
      4: "Không thể tham gia xung đột. Chấp nhận tình huống và tìm bình an.",
      5: "Xung đột được giải quyết thông qua hòa giải. Vận may lớn.",
      6: "Thắng thông qua xung đột. Chiến thắng không mang lại sự hài lòng lâu dài."
    }
  }
  // Thêm các quẻ khác khi cần - đây là mẫu 6 trong số 64 quẻ
];

export function getHexagram(id: number): Hexagram | undefined {
  return hexagrams.find(h => h.id === id);
}

export function generateRandomHexagram(): Hexagram {
  const randomId = Math.floor(Math.random() * hexagrams.length) + 1;
  return hexagrams.find(h => h.id === randomId) || hexagrams[0];
}

export function getHexagramByLines(lines: boolean[]): Hexagram | undefined {
  return hexagrams.find(h => 
    h.lines.every((line, index) => line === lines[index])
  );
}