import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function ExercisesPage() {
  const categories = [
    "All",
    "Strength",
    "Cardio",
    "Flexibility",
    "Calisthenics",
  ];

  const exercises = [
    {
      name: "Barbell Squat",
      category: "Strength",
      muscles: ["Quadriceps", "Hamstrings", "Glutes"],
      difficulty: "Intermediate",
    },
    {
      name: "Bench Press",
      category: "Strength",
      muscles: ["Chest", "Triceps", "Shoulders"],
      difficulty: "Intermediate",
    },
    // Add more exercises here
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col space-y-4">
        <h1 className="text-3xl font-bold">Exercise Library</h1>
        <Input
          placeholder="Search exercises..."
          className="max-w-md"
        />
      </div>

      <Tabs defaultValue="All">
        <TabsList>
          {categories.map((category) => (
            <TabsTrigger key={category} value={category}>
              {category}
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value="All" className="mt-6">
          <ScrollArea className="h-[600px] pr-4">
            <div className="grid gap-4">
              {exercises.map((exercise) => (
                <Card key={exercise.name}>
                  <CardHeader>
                    <CardTitle>{exercise.name}</CardTitle>
                    <CardDescription>
                      {exercise.category} • {exercise.difficulty}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Target Muscles: {exercise.muscles.join(", ")}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </ScrollArea>
        </TabsContent>
      </Tabs>
    </div>
  );
}