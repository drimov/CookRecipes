import { Separator } from "@radix-ui/react-separator"

export default function Favorite() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Favorite</h3>
        <p className="text-sm text-muted-foreground">
          Liste de vos recettes favorites.
        </p>
      </div>
      <Separator />
      <ul>
        <li>
          <strong>Recette 1</strong>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            ipsa, eaque quasi omnis provident temporibus tenetur reprehenderit
            nam. Deserunt quo earum porro facere odit, quod rerum eum
            perferendis blanditiis repudiandae.
          </p>
        </li>
        <li>
          <strong>Recette 2</strong>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            ipsa, eaque quasi omnis provident temporibus tenetur reprehenderit
            nam. Deserunt quo earum porro facere odit, quod rerum eum
            perferendis blanditiis repudiandae.
          </p>
        </li>
        <li>
          <strong>Recette 3</strong>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            ipsa, eaque quasi omnis provident temporibus tenetur reprehenderit
            nam. Deserunt quo earum porro facere odit, quod rerum eum
            perferendis blanditiis repudiandae.
          </p>
        </li>
      </ul>
    </div>
  )
}
