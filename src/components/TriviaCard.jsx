import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function TriviaCard({ trivia }) {
  return (
    <Card className="relative bg-white/90 border-2 border-[#FC97B7] text-[#3b2b35] shadow-md hover:scale-[1.02] transition-transform rounded-xl">
      <div className="absolute top-2 left-2 bg-[#FC97B7] text-white font-bold px-3 py-1 rounded-sm">
        ?
      </div>

      <CardHeader className="pt-12">
        <CardTitle
          className="text-xl font-black leading-relaxed"
          dangerouslySetInnerHTML={{ __html: trivia.question }}
        />
      </CardHeader>

      <CardContent className="space-y-3">
        <div className="border-t-2 border-dashed border-[#FC97B7] pt-4">
          <p>
            <strong className="text-[#FC97B7]">Categoría:</strong>{" "}
            {trivia.category}
          </p>

          <p>
            <strong className="text-[#FC97B7]">Tipo:</strong>{" "}
            {trivia.type}
          </p>

          <Badge className="bg-[#D1F985] text-[#3b2b35] hover:bg-[#D1F985]">
            {trivia.difficulty}
          </Badge>
        </div>

        <span className="absolute bottom-3 right-4 text-3xl text-[#FC97B7]">
          ✧
        </span>
      </CardContent>
    </Card>
  );
}